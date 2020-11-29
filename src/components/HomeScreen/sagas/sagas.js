import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {BASE_URL} from '../../../constants';

function fetchAllPosts(){
    return axios.get(`${BASE_URL}/get-feed`);
}

function* fetchPosts() {
    try {
       const res = yield call(fetchAllPosts); 
       yield put({type: "GET_POSTS_SUCCESS", data: res.data});
    } catch (e) {
       yield put({type: "GET_POSTS_FAILED"});
    }
 }

 function* postsSaga() {
    yield takeEvery("GET_POSTS", fetchPosts);
  }

  export default postsSaga;