import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// import { useRouterHistory } from "react-router";
// import { createHistory as history } from "history";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Internal modules
import AppDenizen from "./components/app_denizen";
import ParticipantsIndex from "./containers/app_denizen/participants_index";
import ParticipantsShow from "./containers/app_denizen/participants_show";
// import DenizenHome from "./components/app_denizen/denizen_home";
// import ParticipantsShow from "./containers/app_denizen/participants_show";
import NavPrimary from "./containers/app_denizen/nav_primary";
import "../assets/stylesheets/application.scss";

// Reducers
import navSecondaryReducer from "./reducers/nav_secondary_reducer";
import participantReducer from "./reducers/participant_reducer";
import selectedDenizenTabReducer from "./reducers/selected_denizen_tab_reducer";
import quoteReducer from "./reducers/quote_reducer";

const identityReducer = (state = null) => state;

const initialState = {
  participants: [],
  quotes: [],
  denizenTabs: [
    "Home",
    "Interviews",
    "Report",
    "Designer Database",
    "Quotes",
    "Resources",
  ],
  selectedDenizenTab: "home",
};

const reducers = combineReducers({
  navSecondary: navSecondaryReducer,
  participants: participantReducer,
  denizenTabs: identityReducer,
  selectedDenizenTab: selectedDenizenTabReducer,
  quotes: quoteReducer,
});

// const root = document.getElementById("root");
// if (root) {
//   ReactDOM.render(<App />, root);
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));
const store = createStore(reducers, initialState, middlewares);

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    {/* <AppDenizen /> */}
    {/* <Router history={history}> */}
    <Router>
      {/* <div className='thin-container'> */}
      <div>
        <Container>
          <NavPrimary />

          <Switch>
            <Route path='/denizendesigner' component={AppDenizen} />
            <Redirect exact from='/' to='/denizendesigner/home' />
          </Switch>
        </Container>
      </div>
    </Router>
  </Provider>,
  root
);
