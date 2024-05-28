// ScanComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enqueueScanRequest } from '../store/actions/items';

const ItemScan = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const error = useSelector((state) => state.error);

  const handleScan = (item) => {
    dispatch(enqueueScanRequest(item));
  };

  return (
    <div>
      <button onClick={() => handleScan('item1')}>
        Scan Item
      </button>
      {error && <p>Error: {error}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemScan;