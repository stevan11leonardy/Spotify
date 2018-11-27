import { useState } from 'react';

const ChangePage = (defaultKey) => {
  const [pageId, setPageId] = useState(defaultKey);
  function click(key) {
    setPageId(key);
  }

  return {
    pageId,
    click,
  };
};

export default ChangePage;
