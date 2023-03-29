import { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent } from '@mui/material';

import { useAppDispatch } from '../../hooks/hooks';
import { TNote, changeNote } from '../../store/slices/notesSlice';

type NoteProps = {
  note: TNote;
};

function ChangeNote({ note }: NoteProps) {
  const { id, content } = note;
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [dialogContent, setContent] = useState('');
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setError(false);
    setOpen(true);
    setContent(content);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitDialog = () => {
    if (!dialogContent) {
      setError(true);
    } else {
      const tags = [...new Set(dialogContent.match(/#\w+/g))].map((v) => v.replace('#', ''));
      const newNote = { content: dialogContent, tags, id };
      setError(false);
      dispatch(changeNote(newNote));
      setContent('');
      handleClose();
    }
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Change</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            multiline
            fullWidth
            error={error}
            margin='dense'
            label='Note content'
            type='text'
            variant='standard'
            onChange={(e) => setContent(e.target.value)}
            value={dialogContent}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitDialog}>Change</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ChangeNote;
