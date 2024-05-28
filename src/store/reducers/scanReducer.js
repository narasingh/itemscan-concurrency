import { ENQUEUE_SCAN_REQUEST, SCAN_ITEM_SUCCESS, SCAN_ITEM_FAILURE } from '../actions/items';

const initialState = {
  items: [],
  error: null,
};

const scanReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENQUEUE_SCAN_REQUEST:
      return { ...state };
    case SCAN_ITEM_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SCAN_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default scanReducer;