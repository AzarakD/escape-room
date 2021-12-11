import {
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { fetchQuest } from 'store/api-actions';
import { getCurrentQuest } from 'store/selectors';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { BookingModal } from './components/components';
import { MainLayout } from 'components/common/common';
import {
  Difficulty,
  CoverSize,
} from 'const';
import * as S from './detailed-quest.styled';

const questGenre = {
  'adventures': 'приключения',
  'horror': 'ужасы',
  'mystic': 'мистика',
  'detective': 'детектив',
  'sci-fi': 'sci-fi',
};

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const currentQuest = useSelector(getCurrentQuest);
  const dispatch = useDispatch();

  const {id} = useParams();
  const questId = Number(id);

  useEffect(() => {
    if (currentQuest.id !== questId) {
      dispatch(fetchQuest(questId));
    }
  });

  if (currentQuest.id !== questId) {
    return <>Loading...</>;
  }

  const {
    coverImg,
    title,
    type,
    duration,
    peopleCount,
    level,
    description,
  } = currentQuest;

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width={CoverSize.WIDTH}
          height={CoverSize.HEIGHT}
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{questGenre[type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCount[0]}–${peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{Difficulty[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
