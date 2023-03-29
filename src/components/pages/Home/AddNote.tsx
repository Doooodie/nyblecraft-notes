import { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent } from '@mui/material';

import { useAppDispatch } from '../../hooks/hooks';
import { addNote } from '../../store/slices/notesSlice';

function AddNote() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setError(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitDialog = () => {
    if (!content) {
      setError(true);
    } else {
      const tags = [...new Set(content.match(/#\w+/g))].map((v) => v.replace('#', ''));
      const note = { content, tags, id: Date.now() };
      dispatch(addNote(note));
      setContent('');
      setError(false);
      handleClose();
    }
  };

  return (
    <>
      <Button size='large' variant='contained' onClick={handleClickOpen}>
        Add note
      </Button>
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitDialog}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddNote;
