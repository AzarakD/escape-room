import { QuestGenre } from 'const';

export const filterQuestsByGenre = (quests, genre) => {
  if (genre === QuestGenre.all) {
    return quests;
  }
  return quests.filter((quest) => quest.type === genre);
};
