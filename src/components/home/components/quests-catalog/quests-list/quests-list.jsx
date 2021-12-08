import { useSelector } from 'react-redux';
import { getQuests } from 'store/selectors';
import QuestItem from './quest-item/quest-item';
import * as S from './quests-list.styled';

const QuestsList = () => {
  const questList = useSelector(getQuests);

  return (
    <S.QuestsList>
      {
        questList.map((quest) => <QuestItem quest={quest} key={quest.id} />)
      }
    </S.QuestsList>
  );
};

export default QuestsList;
