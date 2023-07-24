import React, { useState } from 'react';

const ShortenText = ({ text, maxLength }) => {
  const [isExpanded] = useState(false);

  return (
    <span>
      {isExpanded ? text : text.slice(0, maxLength - 3) + (text.length > maxLength ? '...' : '')}
      {/* {text.length > maxLength && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Thu gọn' : 'Xem thêm'}
        </button>
      )} */}
    </span>
  );
};

export default ShortenText;
