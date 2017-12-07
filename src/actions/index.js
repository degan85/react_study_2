/*
    action creator

    이벤트가 발생하면 action creator를 호출
    action creator는 단순히 object를 반환하는 함수
    {type: type, payload: value} - 통상적으로 type, payload로 네이밍
    모든 다른 리듀서에게 자동적으로 보내짐
    모든 리듀서는 switch(type)으로 해당 액션과 type과 관련이 있는지 확인
    관련이 없으면(default) 상관하지 않음
    새롭게 반환된 state는 어플리케이션 스테이트와 합쳐짐
    이는 다시 리액트 어플리케이션으로 돌아가서 모든 컴포넌트가 리랜더링 됨
 */

export function selectBook(book) {
    console.log('A book has been selected: ', book.title);
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.

    // selectBook은 액션 생성자이고 액션 반환이 필요하다
    // 타입과 페이로드를 갖고 있다.
    return {
        type : 'BOOK_SELECTED',
        payload: book
    }
}

export function otherReducer() {
    console.log('other reducer!!!')
}