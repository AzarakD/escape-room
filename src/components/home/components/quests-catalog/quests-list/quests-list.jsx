import { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  getCurrentGenre,
  getFilteredQuests,
  getQuests,
} from 'store/selectors';
import { filterQuests } from 'store/actions';
import QuestItem from './quest-item/quest-item';
import { filterQuestsByGenre } from 'utils';
import * as S from './quests-list.styled';

const QuestsList = () => {
  const quests = useSelector(getQuests);
  const currentGenre = useSelector(getCurrentGenre);
  const filteredQuests = useSelector(getFilteredQuests);
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = filterQuestsByGenre(quests, currentGenre);
    dispatch(filterQuests(payload));
  }, [currentGenre, dispatch, quests]);

  return (
    <S.QuestsList>
      {
        filteredQuests.map((quest) => <QuestItem quest={quest} key={quest.id} />)
      }
    </S.QuestsList>
  );
};

export default QuestsList;
