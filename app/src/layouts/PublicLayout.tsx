import { useEffect, useState } from 'react';
import Header from './Header';

const PublicLayout = (props: any) => {
  const { children } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='relative'>
      <div
        className={`w-[100vw] h-[100vh] ${
          loading === false && 'hidden'
        } overflow-hidden z-[9999] absolute bg-white`}
      >
        Loadingggg....
      </div>

      <>
        <Header />
        <div>{children}</div>
      </>
    </div>
  );
};

export default PublicLayout;
