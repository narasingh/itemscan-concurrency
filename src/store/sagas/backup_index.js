// sagas.js
import { call, put, take, actionChannel, flush, takeEvery, fork, all } from 'redux-saga/effects';
import { channel, buffers } from 'redux-saga';
import { ENQUEUE_SCAN_REQUEST, scanItemSuccess, scanItemFailure } from '../actions/items';

// Mock API call
const addItemApi = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(item);
      } else {
        reject(new Error('Scan failed'));
      }
    }, Math.floor(Math.random() * 400)); // Simulate network latency
  });
};

function* processQueue(channel) {
  while (true) {
    const action = yield take(channel);
    const item = action.payload;
    try {
      const response = yield call(addItemApi, item);
      yield put(scanItemSuccess(response));
    } catch (error) {
      yield put(scanItemFailure(error.message));
      while (true) { // flush the remaining items in the channel
        const pendingAction = yield flush(channel);
        if (!pendingAction.length) break;
      }
    }
  }
}

function* watchEnqueueScanRequest() {
  const queueChannel = yield call(channel, buffers.expanding(1));
  yield takeEvery(ENQUEUE_SCAN_REQUEST, function* (action) {
    yield put(queueChannel, action);
  });
  yield fork(processQueue, queueChannel);
}

export default function* rootSaga() {
  yield watchEnqueueScanRequest();
}