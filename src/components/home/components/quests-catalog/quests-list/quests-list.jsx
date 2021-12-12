import {
  useEffect,
  useState,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  getCurrentGenre,
  getQuests,
} from 'store/selectors';
import { changeGenre } from 'store/actions';
import QuestItem from './quest-item/quest-item';
import { filterQuestsByGenre } from 'utils';
import { QuestGenre } from 'const';
import * as S from './quests-list.styled';

const QuestsList = () => {
  const [filteredQuests, setFilteredQuests] = useState([]);

  const quests = useSelector(getQuests);
  const currentGenre = useSelector(getCurrentGenre);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!filteredQuests.length) {
      dispatch(changeGenre(QuestGenre.ALL));
    }
  })

  useEffect(() => {
    setFilteredQuests(filterQuestsByGenre(quests, currentGenre));
  }, [currentGenre, quests]);

  return (
    <S.QuestsList>
      {
        filteredQuests.map((quest) => <QuestItem quest={quest} key={quest.id} />)
      }
    </S.QuestsList>
  );
};

export default QuestsList;
