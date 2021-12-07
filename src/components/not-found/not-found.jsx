import { Link } from 'components/common/common';
import { AppRoute } from 'const';
import {
  Main,
  NotFoundTitle,
  NotFoundText
} from './not-found.styled';

const NotFoundPage = () => (
  <Main>
    <NotFoundTitle>Ошибка 404. Страница не найдена</NotFoundTitle>
    <Link to={ AppRoute.Home }>
      <NotFoundText>Перейти на главную</NotFoundText>
    </Link>
  </Main>
);

export default NotFoundPage;
