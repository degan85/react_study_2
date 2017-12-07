import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Details for :</h3>
                <div>Titie: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // reducers/index.js에 combineReducers()안에 등록한 키값을 불러와 연결
        book : state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);