import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  loadQuests,
  loadQuest,
} from './actions';
import { QuestGenre } from 'const';

const initialState = {
  quests: [],
  isQuestsLoaded: false,
  currentGenre: QuestGenre.ALL,
  currentQuest: {},
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
      state.isQuestsLoaded = true;
    })
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(loadQuest, (state, action) => {
      state.currentQuest = action.payload;
    });
});
