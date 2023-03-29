import { Card, CardActions, CardContent, Button, Typography, Chip, Stack } from '@mui/material';

import { TNote, removeNote } from '../../store/slices/notesSlice';
import { useAppDispatch } from '../../hooks/hooks';
import ChangeNote from './ChangeNote';

export type NoteProps = {
  note: TNote;
};

function Note({ note }: NoteProps) {
  const dispatch = useAppDispatch();
  const { content, tags, id } = note;

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Stack spacing={2} alignItems='flex-start'>
          <Typography>{content}</Typography>
          {tags.length ? (
            <Stack direction='row' spacing={1}>
              {tags.map((tag) => (
                <Chip label={tag} key={tag} />
              ))}
            </Stack>
          ) : (
            <Chip label='No tags' />
          )}
        </Stack>
      </CardContent>
      <CardActions>
        <ChangeNote note={note} />
        <Button onClick={() => dispatch(removeNote(id))}>Remove</Button>
      </CardActions>
    </Card>
  );
}

export default Note;
