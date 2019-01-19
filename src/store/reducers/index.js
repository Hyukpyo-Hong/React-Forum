import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import threadsReducer from './threads';
import channelsReducer from './channels';
import threadReducer from './thread';
import authReducer from './auth';

const reducer = combineReducers({
  threads: threadsReducer,
  channels: channelsReducer,
  thread: threadReducer,
  form: formReducer,
  auth: authReducer,
  //   noty: notyReducer,
  //   createThread: createThreadReducer,
  //   editThread: editThreadReducer,
  //   createReply: createReplyReducer,
//   router: routerReducer,
});

export default reducer;
