import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

export const icons = [
  IconAllQuests,
  IconAdventures,
  IconHorrors,
  IconMystic,
  IconDetective,
  IconScifi,
];

export const AppRoute = {
  HOME: '/',
  QUEST: '/detailed-quest/:id',
  CONTACTS: '/contacts',
};

export const APIRoute = {
  QUESTS: '/quests',
  QUEST: '/quests/:id',
  ORDERS: '/orders',
  NOT_FOUND: '/404',
};

export const ActionType = {
  LOAD_QUESTS: 'data/loadQuests',
  LOAD_QUEST: 'data/loadQuest',
  CHANGE_GENRE: 'app/changeGenre',
  FILTER_QUESTS: 'app/filterQuests',
  REDIRECT: 'app/redirect',
};

export const PreviewSize = {
  WIDTH: '344',
  HEIGHT: '232',
};

export const CoverSize = {
  WIDTH: '1366',
  HEIGHT: '768',
};

export const Difficulty = {
  HARD: 'сложный',
  MEDIUM: 'средний',
  EASY: 'простой',
};

export const QuestGenre = {
  ALL: 'all',
  ADVENTURES: 'adventures',
  HORROR: 'horror',
  MYSTIC: 'mystic',
  DETECTIVE: 'detective',
  SCI_FI: 'sci-fi',
};

export const ToastMessage = {
  ERROR: 'Сервис недоступен. Попробуйте позже',
  SUCCESS: 'Ваш заказ в обработке',
  PHONE: 'Введите 10-значный номер телефона',
  PEOPLE_COUNT: 'Количество участников должно быть больше 0',
};

export const tabGenres = [
  'Все квесты',
  'Приключения',
  'Ужасы',
  'Мистика',
  'Детектив',
  'Sci-fi',
];
