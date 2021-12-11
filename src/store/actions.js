import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'const';

export const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({ payload: quests }),
);

export const loadQuest = createAction(
  ActionType.LoadQuest,
  (quest) => ({ payload: quest }),
);

export const changeGenre = createAction(
  ActionType.ChangeGenre,
  (genre) => ({ payload: genre }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url) => ({ payload: url }),
);
