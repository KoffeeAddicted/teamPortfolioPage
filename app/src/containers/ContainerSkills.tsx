import Marquee from 'react-fast-marquee';

import { TypographySkill } from '../components';
import { skillIcons } from '../data/skill';

const ContainerSkills = () => {
  let skillKeywords = [
    {
      style: 'text-tortilla',
      content: 'generating',
    },
    {
      style: 'text-tawny',
      content: 'maintaining',
    },
    {
      style: 'text-goldenrod',
      content: 'optimizing',
    },
  ];
  return (
    <div className='w-full h-[120vh]'>
      <div className='w-full flex h-[50%] items-center justify-center'>
        <div className="font-['MuseoModernoThicc'] py-5 text-center text-[30px] sm:text-[40px] lg:text-[55px] w-[80%] lg:w-[60%]">
          Our team is an expertise at
          <br />
          <TypographySkill ulItems={skillKeywords} linkingText='project' />
          <span className='font-["MuseoModernoSemiBold"] text-[12px] sm:text-[20px] lg:text-[30px]'>
            with modern frameworks and languages
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
