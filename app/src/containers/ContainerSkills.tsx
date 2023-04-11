import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';

import { TypographySkill } from '../components';
import { skillIcons } from '../data/skill';

export let handle = { i18n: 'skills' };

const ContainerSkills = () => {
  let { t } = useTranslation('skills');

  let skillKeywords = [
    {
      style: 'text-tortilla',
      content: t('ul-item1'),
    },
    {
      style: 'text-tawny',
      content: t('ul-item2'),
    },
    {
      style: 'text-goldenrod',
      content: t('ul-item3'),
    },
  ];
  return (
    <div className='w-full h-[120vh]'>
      <div className='w-full flex h-[50%] items-center justify-center'>
        <div className="font-['MuseoModernoThicc'] py-5 text-center text-[30px] sm:text-[40px] lg:text-[55px] w-[80%] lg:w-[60%]">
          {t('introduction')}
          <br />
          <TypographySkill ulItems={skillKeywords} linkingText={t('project')} />
          <span className='font-["MuseoModernoSemiBold"] text-[12px] sm:text-[20px] lg:text-[30px]'>
            {t('subtitle')}
          </span>
        </div>
      </div>
      <Marquee className='text-[60px]'>
        {skillIcons.map((item) => (
          <div className='mx-[30px]'>{item.component}</div>
        ))}
      </Marquee>
    </div>
  );
};

export default ContainerSkills;
