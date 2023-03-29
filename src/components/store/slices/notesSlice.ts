import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TNote = {
  id: number;
  content: string;
  tags: string[];
};

type NotesSliceState = {
  notes: TNote[];
};

const initialState: NotesSliceState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<TNote>) {
      state.notes.push(action.payload);
    },
    removeNote(state, action: PayloadAction<number>) {
      const thisState = state;
      thisState.notes = thisState.notes.filter((note) => note.id !== action.payload);
    },
    changeNote(state, action: PayloadAction<TNote>) {
      const thisNote = state.notes.find((note) => note.id === action.payload.id);
      if (thisNote) {
        thisNote.content = action.payload.content;
        thisNote.tags = action.payload.tags;
      }
    },
  },
});

export const { addNote, removeNote, changeNote } = notesSlice.actions;
export default notesSlice.reducer;
