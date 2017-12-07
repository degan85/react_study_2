/*
    components와 구별하기 위해 containers를 만들어 넣음
    components는 react에 의해 만들어진 state 접근
    containers는 redux에 의해 만들어지는 state  접근

    redux는 어플리케이션 state를 구조화(전역)
    react는 이것들을 디스플레이(view)

    react와 redux는 전혀 다른 라이브러리
    react-redux 만이 둘을 연결
*/

// 라이브러리 전체가 아니라 싱글 프로퍼티를 불러 올 경우 {}안에 넣음
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectBook } from "../actions/index";
import  { bindActionCreators } from 'redux';
import {combineReducers} from "redux/index";

// app.js와 상관없이 state를 container에서 별도로 관리(?)
// container의 state가 변할때 마다 리랜더 함.
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
           return (
               <li
                   key={book.title}

                   // 이벤트 발생 시 액션 생성자에게 연결
                   // bindActionCreators()에서 선언한 키값으로 호출
                   onClick={() => this.props.selectBook(book)}
                   className="list-group-item">{book.title}
               </li>
           )
        });
    }

    render() {
        console.log(this.props.test);
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        )
    }
}

// react와 위(북리스트 컨테이너)의 props를 연결하는 함수(props.books)
// react-redux
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        // 위에 console.log(this.props.test); -> test
        test: 'test',
        // reducers/index.js에 combineReducers()안에 등록한 키값을 불러와 연결
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // bindActionCreators가 dispatch와 하는 일
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    // selectBook이 호출될 때마다 결과는 리듀서로 전달
    // 왼쪽 selectBook은 이벤트 핸들러에서 호출하는 키값(props안으로 바인드 됨)
    // 오른쪽 selectbook은 action 생성자를 연결
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// BookList conponents를 내보내는 것이 아니라 containers를 내보내는 것임
// mapStateToProps는 컨터이너를 BookList에 컨포넌트로 연결(props 안으로 넣어서)
// state가 바뀔때 마다 리랜더링
export default connect(mapStateToProps, mapDispatchToProps )(BookList);
