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
  Home: '/',
  Quest: '/quest/:id',
  Contacts: '/contacts',
};

export const APIRoute = {
  Quests: '/quests',
  Quest: '/quests/:id',
  Orders: '/orders',
};

export const ActionType = {
  LoadQuests: 'data/loadQuests',
  ChangeGenre: 'app/changeGenre',
  FilterQuests: 'app/filterQuests',
};

export const PreviewSize = {
  WIDTH: '344',
  HEIGHT: '232',
};

export const Difficulty = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'простой',
};

export const QuestGenre = {
  all: 'all',
  adventures: 'adventures',
  horror: 'horror',
  mystic: 'mystic',
  detective: 'detective',
  sciFi: 'sci-fi',
};

export const tabGenres = [
  'Все квесты',
  'Приключения',
  'Ужасы',
  'Мистика',
  'Детектив',
  'Sci-fi',
];
