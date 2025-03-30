// sagas.js
import { call, put, take, actionChannel, flush } from 'redux-saga/effects';
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
    }, 50); // Simulate network latency
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
    } finally {
      yield flush(channel);
    }
  }
}

function* watchEnqueueScanRequest() {
  const channel = yield actionChannel(ENQUEUE_SCAN_REQUEST);
  yield processQueue(channel);
}

export default function* rootSaga() {
  yield watchEnqueueScanRequest();
}