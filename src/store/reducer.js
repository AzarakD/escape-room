import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  filterQuests,
  loadQuests,
} from './actions';
import { QuestGenre } from 'const';

const initialState = {
  quests: [],
  isQuestsLoaded: false,
  currentGenre: QuestGenre.all,
  filteredQuests: [],
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
    .addCase(filterQuests, (state, action) => {
      state.filteredQuests = action.payload;
    })
});
