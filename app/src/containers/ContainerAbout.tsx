import { CardProfile } from '../components';

const ContainerAbout = () => {
  return (
    <div className='w-full h-[100vh] text-[30px] sm:text-[40px] lg:text-[55px] font-["MuseoModernoThicc"]'>
      <div className='h-fit w-full flex justify-center pb-[50px]'>
        <div>About Us</div>
      </div>
      <div className='w-full flex gap-[20px] justify-center flex-wrap'>
        <CardProfile />
        <CardProfile />
        <CardProfile />
        <CardProfile />
      </div>
    </div>
  );
};

export default ContainerAbout;
