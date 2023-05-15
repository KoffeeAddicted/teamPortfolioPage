import { CardProfile } from '../components';
import { useT } from '../hooks/usei18n';

const ContainerAbout = () => {
  let t = useT('translation');

  return (
    <div
      id='aboutSection'
      className='w-full h-fit text-[30px] sm:text-[40px] lg:text-[55px] font-["MuseoModernoThicc"]'
    >
      <div className='h-fit w-full flex justify-center pb-[50px]'>
        <div>{t('about.title')}</div>
      </div>
      <div className='w-full pb-[200px] flex gap-[20px] justify-center flex-wrap'>
        <CardProfile />
        <CardProfile />
        <CardProfile />
        <CardProfile />
      </div>
    </div>
  );
};

export default ContainerAbout;
