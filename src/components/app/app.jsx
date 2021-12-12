import { useSelector } from 'react-redux';
import { getIsQuestsLoaded } from 'store/selectors';
import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFound from 'components/not-found/not-found';
import Spinner from 'components/spinner/spinner';
import { appTheme } from './common';
import { AppRoute } from 'const';
import * as S from './app.styled';

const App = () => {
  const isQuestsLoaded = useSelector(getIsQuestsLoaded);

  if (!isQuestsLoaded) {
    return <Spinner />;
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Switch>
        <Route exact path={ AppRoute.QUEST }>
          <DetailedQuest />
        </Route>
        <Route exact path={ AppRoute.CONTACTS }>
          <Contacts />
        </Route>
        <Route exact path={ AppRoute.HOME }>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
