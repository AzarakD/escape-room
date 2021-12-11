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
import { appTheme } from './common';
import { AppRoute } from 'const';
import * as S from './app.styled';

const App = () => {
  const isQuestsLoaded = useSelector(getIsQuestsLoaded);

  if (!isQuestsLoaded) {
    return <>Loading...</>;
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Switch>
        <Route exact path={ AppRoute.Quest }>
          <DetailedQuest />
        </Route>
        <Route exact path={ AppRoute.Contacts }>
          <Contacts />
        </Route>
        <Route exact path={ AppRoute.Home }>
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
