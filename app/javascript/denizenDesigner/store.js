import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// Reducers
import navSecondaryReducer from './reducers/nav_secondary_reducer';
import participantReducer from './reducers/participant_reducer';
import selectedDenizenTabReducer from './reducers/selected_denizen_tab_reducer';
import selectedhopdTabReducer from './reducers/selected_hopd_tab_reducer';
import quoteReducer from './reducers/quote_reducer';
import participantsReducer1 from './reducers/participants1reducer';
import cityReducer from './reducers/quote_reducer';
import selectedQuoteCategoryReducer from './reducers/selected_quote_category_reducer';
import { reducer as formReducer } from 'redux-form';

const identityReducer = (state = null) => state;

const initialState = {
  participants: [],
  participants1: [],
  quotes: [],
  denizenTabs: [
    'Home',
    'Interviews',
    'Report',
    'Designer Database',
    'Quotes',
    'Resources',
  ],
  hopdTabs: ['Timeline', 'Data Visualization', 'Repository of Papers'],
  // selectedDenizenTab: 'home',
  quoteCategories: [
    // 'All Quotes',
    'Community Building',
    'Trust',
    'Power',
    'Space Making',
    'Increasing access',
    'Knowledge Building',
    'Responsibility',
    'Mutual Learning',
    'Change Making',
    'Community Empowerment',
    'Future Implications',
    'Adaptation',
    'Design',
  ],
  // selectedQuoteCategory: 'Power',
  cities: [],
};

const reducers = combineReducers({
  navSecondary: navSecondaryReducer,
  participants: participantReducer,
  participants1: participantsReducer1,
  denizenTabs: identityReducer,
  // selectedDenizenTab: selectedDenizenTabReducer,
  hopdTabs: identityReducer,
  // selectedhopdTab: selectedhopdTabReducer,
  quotes: quoteReducer,
  quoteCategories: identityReducer,
  // selectedQuoteCategory: selectedQuoteCategoryReducer,
  cities: cityReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(
  applyMiddleware(logger, reduxPromise, thunk)
);
const store = createStore(reducers, initialState, middlewares);

export default store;
