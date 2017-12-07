import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book'
import ActiveTest from './reducer_test'

// 이 리듀서(combineReducers)는 전역 application state을 추가(글로벌 스테이트)
// component state와는 완전 별개고 연결도 안되있음
const rootReducer = combineReducers({
    // 단지 container state로 key에 object를 생성한 것
    // object 등록한 reducer로 액션 생성자가 모두 액션을 보냄
    books: BooksReducer,
    activeBook: ActiveBook,
    AtctiveTest : ActiveTest
});

export default rootReducer;
