import Marquee from 'react-fast-marquee';

import { TypographySkill } from '../components';
import { skillIcons } from '../data/skill';
import { useT } from '../hooks/usei18n';

const ContainerSkills = () => {
  let t = useT('translation');
  let skillKeywords = [
    {
      style: 'text-tortilla',
      content: t('skills.advantage1'),
    },
    {
      style: 'text-tawny',
      content: t('skills.advantage2'),
    },
    {
      style: 'text-goldenrod',
      content: t('skills.advantage3'),
    },
  ];
  return (
    <div className='w-full pt-[100px] md:pt-[200px] h-[80vh] md:h-[100vh]'>
      <div className='w-full flex h-[50%] items-center justify-center'>
        <div className="font-['MuseoModernoThicc'] py-5 text-center text-[30px] sm:text-[40px] lg:text-[55px] w-[80%] lg:w-[60%]">
          {t('skills.intro')}
          <br />
          <TypographySkill
            ulItems={skillKeywords}
            linkingText={t('skills.projects')}
          />
          <span className='font-["MuseoModernoSemiBold"] text-[12px] sm:text-[20px] lg:text-[30px]'>
            {t('skills.frameworks')}
          </span>
        </div>
      </div>
      <div className='pt-[100px]'>
        <Marquee className='text-[60px]'>
          {skillIcons.map((item, i) => (
            <div key={i} className='mx-[30px]'>
              {item.component}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ContainerSkills;
