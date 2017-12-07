
// 모든 리듀서에 전달 되는지 확인
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED' :
            console.log('action test');
    }

    return state;
}