import { CardWork } from '../components';

const ContainerWork = () => {
  return (
    <div className='w-full h-fit text-[30px] sm:text-[40px] pb-[100px] lg:text-[55px] font-["MuseoModernoThicc"] divide-y divide-slate-200'>
      <div className='h-fit w-full flex justify-center pb-[50px]'>Workflow</div>
      <CardWork />
      <CardWork />
      <CardWork />
      <CardWork />
    </div>
  );
};

export default ContainerWork;
