import { useEffect, useState } from 'react';

const GetContent = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (content === null) {
      fetch('http://localhost:3004/card')
        .then(resp => resp.json())
        .then(((data) => {
          setContent(data);
        }));
    }
  }, [content]);
  return content;
};

export default GetContent;
