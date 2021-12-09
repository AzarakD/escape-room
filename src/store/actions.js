import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'const';

export const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({ payload: quests }),
);

export const changeGenre = createAction(
  ActionType.ChangeGenre,
  (genre) => ({ payload: genre }),
);

export const filterQuests = createAction(
  ActionType.FilterQuests,
  (quests) => ({ payload: quests }),
);
