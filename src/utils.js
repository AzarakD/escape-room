import { QuestGenre } from 'const';

export const filterQuestsByGenre = (quests, genre) => {
  if (genre === QuestGenre.ALL) {
    return quests;
  }
  return quests.filter((quest) => quest.type === genre);
};

export const validatePhone = (phone) => {
  return /^[0-9]{10}$/.test(phone);
};

export const validatePeopleCount = (peopleCount) => {
  return peopleCount > 0;
};
