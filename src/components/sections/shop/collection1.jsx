import { useEffect } from 'react';

const Collection1 = () => {
  useEffect(() => {
    window.open("https://otomatiks.free.nf/?product=product-1", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <main>
      <p>Redirecting to Otomatiks Shop...</p>
    </main>
  );
};

export default Collection1;
