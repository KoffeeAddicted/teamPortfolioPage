import { CardWork } from '../components';
import { useT } from '../hooks/usei18n';

import business from '../assets/images/backgrounds/meeting.jpg';
import design from '../assets/images/backgrounds/design.jpg';
import develop from '../assets/images/backgrounds/develop.jpg';
import optiz from '../assets/images/backgrounds/optimization.avif';
const ContainerWork = () => {
  let t = useT('translation');
  const works = [
    {
      title: t('workflow.section1.title'),
      description: t('workflow.section1.description'),
      image: business,
    },
    {
      title: t('workflow.section2.title'),
      description: t('workflow.section2.description'),
      image: design,
    },
    {
      title: t('workflow.section3.title'),
      description: t('workflow.section3.description'),
      image: develop,
    },
    {
      title: t('workflow.section4.title'),
      description: t('workflow.section4.description'),
      image: optiz,
    },
  ];

  return (
    <div className='w-full h-fit text-[30px] sm:text-[40px] pb-[100px] lg:text-[55px] font-["MuseoModernoThicc"] divide-y divide-slate-200'>
      <div className='h-fit w-full flex justify-center pb-[50px]'>
        {t('workflow.title')}
      </div>
      {works.map((item, i) => (
        <CardWork
          index={i}
          image={item.image}
          key={i}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ContainerWork;
