
// State argument is not application state, only the state
// this reducer is responsible for
// state 요소는 어플리케이션 state가 아님
// reducer로 흘러 들어감(index.js안의 conbineReducers)
// 처음에 state값은 undefined라서 에러가 발상하므로 undefined일 때 null 선언(ES6)
// 매개변수 state는 단지 여기 reducer의 응답을 위한 변수일 뿐 application state가 아님
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED' :
            return action.payload;
    }
    return state
}