import { toast } from 'react-toastify';
import {
  loadQuest,
  loadQuests,
  redirectToRoute,
} from './actions';
import {
  APIRoute,
  ToastMessage,
} from 'const';

export const fetchQuests = () =>
  async (dispatch, _getStore, api) => {
    try {
      const { data } = await api.get(APIRoute.QUESTS);
      dispatch(loadQuests(data));
    } catch {
      toast.error(ToastMessage.ERROR);
    }
  };

export const fetchQuest = (questId) =>
  async (dispatch, _getStore, api) => {
    try {
      const { data } = await api.get(APIRoute.QUEST.replace(':id', `${questId}`));
      dispatch(loadQuest(data));
    } catch {
      dispatch(redirectToRoute(APIRoute.NOT_FOUND));
    }
  };

export const sendBookingForm = (userInfo) =>
  async (_dispatch, _getStore, api) => {
    try {
      await api.post(APIRoute.ORDERS, userInfo);
      toast.info(ToastMessage.SUCCESS);
    } catch {
      toast.error(ToastMessage.ERROR);
    }
  };
