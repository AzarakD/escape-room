import { loadQuests } from './actions';
import { APIRoute } from 'const';

export const fetchQuests = () =>
  async (dispatch, _getStore, api) => {
    const { data } = await api.get(APIRoute.Quests);

    dispatch(loadQuests(data));
  };
