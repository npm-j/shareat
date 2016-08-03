import { combineReducers } from 'redux';
import UserInfoReducer from './user_info_reducer';
import UserHistory from './user_history_reducer';
import MapReducer from './map_reducer';
import FilteredReducer from './filtered_reducer';
import SelectedEvent from './selected_event_reducer';


const rootReducer = combineReducers({
  userInfo        : UserInfoReducer,
  userHistory     : UserHistory,
  map             : MapReducer,
  filteredReducer : FilteredReducer,
  selectedEvent   : SelectedEvent
});

export default rootReducer;
