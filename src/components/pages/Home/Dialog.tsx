import { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent } from '@mui/material';

import { useAppDispatch } from '../../hooks/hooks';
import { addNote } from '../../store/slices/notesSlice';

export default function FormDialog() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitDialog = () => {
    const tags = ['1', '2'];
    const note = { content, tags, id: Date.now() };
    dispatch(addNote(note));
    handleClose();
  };

  return (
    <div>
      <Button size='large' variant='contained' onClick={handleClickOpen}>
        Add note
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            multiline
            fullWidth
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
    </div>
  );
}
