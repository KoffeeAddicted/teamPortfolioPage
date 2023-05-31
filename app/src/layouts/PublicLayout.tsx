import { useEffect, useState } from 'react';
import Header from './Header';
import { Loading } from '../components';

const PublicLayout = (props: any) => {
  const { children } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='relative'>
      <div
        className={`w-[100vw] h-[100vh] ${
          loading === false && 'hidden'
        } overflow-hidden z-[99999] absolute bg-white`}
      >
        <Loading />
      </div>
      <>
        <Header />
        <div
          className={`${
            loading === true ? 'h-[100vh] overflow-hidden' : 'h-fit'
          }`}
        >
          {children}
        </div>
      </>
    </div>
  );
};
export default PublicLayout;
