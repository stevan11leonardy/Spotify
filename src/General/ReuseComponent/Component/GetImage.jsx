import { useEffect, useState } from 'react';

const GetImages = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    if (images === null) {
      fetch('http://localhost:3004/image')
        .then(resp => resp.json())
        .then(((data) => {
          setImages(data);
        }));
    }
  }, [images]);
  return images;
};

export default GetImages;
