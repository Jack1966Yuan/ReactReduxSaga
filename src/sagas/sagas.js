import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { receivePostData } from '../actions/postAction';
import { fetchPostData, addNewPostCall } from '../api/apiAction';
import { receiveNewPost } from '../actions/postFormAction';
import { REQUEST_POST_DATA, REQUEST_NEW_POST } from '../actions/type';

function* getPostData(action) {
    try {
        const data = yield call(fetchPostData);
        yield put(receivePostData(data));
    } catch(e) {
        //yield put({type: "REQUEST_POST_FAILED", e}));
        console.log(e);
    }
}

function* addNewPost(action) {
    try {
        const data = yield call(addNewPostCall, action.data);
        yield put(receiveNewPost(data));
    } catch(e) {
        //yield put({type: "ADD_POST_FAILED", e}));
        console.log(e);
    }
}

export default function* mySaga() {
    yield takeEvery(REQUEST_POST_DATA, getPostData);
    yield takeEvery(REQUEST_NEW_POST, addNewPost);
}