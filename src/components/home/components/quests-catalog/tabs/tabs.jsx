import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { getCurrentGenre } from 'store/selectors';
import { changeGenre } from 'store/actions';
import {
  QuestGenre,
  tabGenres,
  icons,
} from 'const';
import * as S from './tabs.styled';

const genres = Object.values(QuestGenre);

const Tabs = () => {
  const currentGenre = useSelector(getCurrentGenre);
  const dispatch = useDispatch();

  const onGenreClick = (index) => dispatch(changeGenre(genres[index]));

  return (
    <S.Tabs>
      {
        icons.map((Icon, index) => (
          <S.TabItem key={genres[index]}>
            <S.TabBtn
              isActive={currentGenre === genres[index]}
              onClick={() => onGenreClick(index)}
            >
              <Icon />
              <S.TabTitle>{tabGenres[index]}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        ))
      }
    </S.Tabs>
  );
};

export default Tabs;
