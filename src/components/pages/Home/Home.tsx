import { useState } from 'react';
import { Autocomplete, Container, Divider, Grid, Stack, TextField } from '@mui/material';

import { useAppSelector } from '../../hooks/hooks';
import Note from './Note';
import AddNote from './AddNote';

function Home() {
  const notes = useAppSelector((state) => state.notes.notes);
  const [filteredTags, setFilteredTags] = useState<string[]>([]);

  return (
    <Container component='main' maxWidth='xl' sx={{ mt: 10, mb: 10 }}>
      <Stack spacing={6}>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Autocomplete
            multiple
            value={filteredTags}
            onChange={(_, value: string[]) => {
              setFilteredTags(value);
            }}
            options={[...new Set(notes.map((note) => note.tags).flat())]}
            filterSelectedOptions
            renderInput={(params) => <TextField {...params} placeholder='Find by tags' />}
            sx={{ flexGrow: 1 }}
          />
          <AddNote />
        </Stack>
        <Divider />
        <Grid container spacing={2}>
          {filteredTags.length
            ? notes.map((note) => {
                const isTagFound = note.tags.some((tag) => filteredTags.includes(tag));
                if (isTagFound) {
                  return (
                    <Grid item xs={3} key={note.id}>
                      <Note note={note} />
                    </Grid>
                  );
                }
                return null;
              })
            : notes.map((note) => (
                <Grid item xs={3} key={note.id}>
                  <Note note={note} />
                </Grid>
              ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export default Home;
