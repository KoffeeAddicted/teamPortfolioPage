import { CardWork } from '../components';
import { useT } from '../hooks/usei18n';

const ContainerWork = () => {
  let t = useT('translation');
  const works = [
    {
      title: t('workflow.section1.title'),
    },
    {
      title: t('workflow.section2.title'),
    },
    {
      title: t('workflow.section3.title'),
    },
    {
      title: t('workflow.section4.title'),
    },
  ];

  return (
    <div className='w-full h-fit text-[30px] sm:text-[40px] pb-[100px] lg:text-[55px] font-["MuseoModernoThicc"] divide-y divide-slate-200'>
      <div className='h-fit w-full flex justify-center pb-[50px]'>
        {t('workflow.title')}
      </div>
      {works.map((item, i) => (
        <CardWork index={i} key={i} title={item.title} />
      ))}
    </div>
  );
};

export default ContainerWork;
