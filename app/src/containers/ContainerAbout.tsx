import { CardProfile } from '../components';
import { useT } from '../hooks/usei18n';

let data = [
  {
    name: 'Nguyễn Văn A',
    position: 'Full-stack developer',
    quote:
      ' I love using my coding skills to solve challenging problems and create solutions that make a real difference for our clients.',
    image: '',
    background: '',
  },
  {
    name: 'Nguyễn Văn A',
    position: 'Full-stack developer',
    quote:
      "As a developer, I'm always striving for perfection and pushing myself to learn and grow. It's a privilege to be part of a team",
    image: '',
    background: '',
  },
  {
    name: 'Nguyễn Văn A',
    position: 'Full-stack developer',
    quote:
      " I'm inspired by the creativity and innovation of my colleagues, and I feel fortunate to be part of such collaborative team",
    image: '',
    background: '',
  },
  {
    name: 'Nguyễn Văn A',
    position: 'Full-stack developer',
    quote:
      "For me, the most rewarding part of being a developer is seeing the impact that our solutions have on our clients' businesses.",
    image: '',
    background: '',
  },
];

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
        {data.map((item, i) => (
          <CardProfile
            key={i}
            name={item.name}
            position={item.position}
            quote={item.quote}
          />
        ))}
      </div>
    </div>
  );
};

export default ContainerAbout;
