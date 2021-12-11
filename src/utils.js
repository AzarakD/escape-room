import { QuestGenre } from 'const';

export const filterQuestsByGenre = (quests, genre) => {
  if (genre === QuestGenre.All) {
    return quests;
  }
  return quests.filter((quest) => quest.type === genre);
};
