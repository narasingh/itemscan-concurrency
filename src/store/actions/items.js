// actions.js
export const ENQUEUE_SCAN_REQUEST = 'ENQUEUE_SCAN_REQUEST';
export const PROCESS_SCAN_QUEUE = 'PROCESS_SCAN_QUEUE';
export const SCAN_ITEM_SUCCESS = 'SCAN_ITEM_SUCCESS';
export const SCAN_ITEM_FAILURE = 'SCAN_ITEM_FAILURE';

export const enqueueScanRequest = (item) => ({
  type: ENQUEUE_SCAN_REQUEST,
  payload: item,
});

export const processScanQueue = () => ({
  type: PROCESS_SCAN_QUEUE,
});

export const scanItemSuccess = (item) => ({
  type: SCAN_ITEM_SUCCESS,
  payload: item,
});

export const scanItemFailure = (error) => ({
  type: SCAN_ITEM_FAILURE,
  payload: error,
});