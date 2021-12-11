import {
  loadQuest,
  loadQuests,
  redirectToRoute,
} from './actions';
import { APIRoute } from 'const';

export const fetchQuests = () =>
  async (dispatch, _getStore, api) => {
    const { data } = await api.get(APIRoute.Quests);
    dispatch(loadQuests(data));
  };

export const fetchQuest = (questId) =>
  async (dispatch, _getStore, api) => {
    try {
      const { data } = await api.get(APIRoute.Quest.replace(':id', `${questId}`));
      dispatch(loadQuest(data));
    } catch {
      dispatch(redirectToRoute(APIRoute.NotFound));
    }
  };
