import { createReducer } from '@reduxjs/toolkit';
import { loadQuests } from './actions';

const initialState = {
  quests: [],
  isQuestsLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
      state.isQuestsLoaded = true;
    });
});
