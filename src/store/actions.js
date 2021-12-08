import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'const';

export const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({ payload: quests }),
);
