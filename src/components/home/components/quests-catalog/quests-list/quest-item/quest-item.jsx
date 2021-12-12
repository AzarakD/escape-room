import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import {
  AppRoute,
  Difficulty,
  PreviewSize,
} from 'const';
import * as S from './quest-item.styled';

const QuestItem = ({quest}) => {
  const {
    id,
    title,
    previewImg,
    peopleCount,
    level,
  } = quest;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={AppRoute.QUEST.replace(':id', String(id))}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width={PreviewSize.WIDTH}
            height={PreviewSize.HEIGHT}
            alt={`квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${peopleCount[0]}–${peopleCount[1]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {Difficulty[level.toUpperCase()]}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
};

export default QuestItem;
