import { Card, CardActions, CardContent, Button, Typography, Chip, Stack } from '@mui/material';

import { TNote } from '../../store/slices/notesSlice';

type NoteProps = {
  note: TNote;
};

function Note({ note }: NoteProps) {
  const { content, tags, id } = note;

  const handleDelete = () => {
    return 1;
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Stack spacing={2} alignItems='flex-start'>
          <Typography>{content}</Typography>
          <Stack direction='row' spacing={1}>
            {tags.map((tag) => (
              <Chip label={tag} onClick={handleDelete} onDelete={handleDelete} key={id} />
            ))}
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Button>Edit</Button>
        <Button>Remove</Button>
      </CardActions>
    </Card>
  );
}

export default Note;
