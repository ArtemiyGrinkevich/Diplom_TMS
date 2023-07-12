import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ClockState {
  time: string;
}

const initialState: ClockState = {
  time: new Date().toLocaleTimeString(),
};

const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    updateTime(state) {
      state.time = new Date().toLocaleTimeString();
    },
  },
});

export const { updateTime } = clockSlice.actions;
export default clockSlice.reducer;