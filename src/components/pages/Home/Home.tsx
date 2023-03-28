import { Autocomplete, Container, Divider, Grid, Stack, TextField } from '@mui/material';

import { useAppSelector } from '../../hooks/hooks';
import Note from './Note';
import FormDialog from './Dialog';

const hobbies = [
  { title: 'WATCHING MOVIE' },
  { title: 'SPORTS' },
  { title: 'MUSIC' },
  { title: 'DRAWING' },
];

function Home() {
  const notes = useAppSelector((state) => state.notes.notes);

  return (
    <Container component='main' maxWidth='xl' sx={{ mt: 10, mb: 10 }}>
      <Stack spacing={6}>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Autocomplete
            multiple
            options={hobbies}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => <TextField {...params} placeholder='Find by tags' />}
            sx={{ flexGrow: 1 }}
          />
          <FormDialog />
        </Stack>
        <Divider />
        <Grid container spacing={2}>
          {notes.map((note) => (
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
