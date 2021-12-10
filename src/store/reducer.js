import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  loadQuests,
} from './actions';
import { QuestGenre } from 'const';

const initialState = {
  quests: [],
  isQuestsLoaded: false,
  currentGenre: QuestGenre.all,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
      state.isQuestsLoaded = true;
    })
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    });
});
