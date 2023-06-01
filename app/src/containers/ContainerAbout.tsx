import { CardProfile } from '../components';
import { useT } from '../hooks/usei18n';
import eric from '../assets/images/backgrounds/eric.jpg';
import phat from '../assets/images/backgrounds/phat.jpg';
import thinh from '../assets/images/backgrounds/thinh.jpg';
import hai from '../assets/images/backgrounds/hai.jpg';

let data = [
  {
    name: 'Đặng Chí Hào',
    position: 'Front-end developer',
    quote:
      ' I love using my coding skills to solve challenging problems and create solutions that make a real difference for our clients.',
    image: eric,
    background: '',
    gitLink: 'https://github.com/EricDang-2410',
    inLink:
      'https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-ch%C3%AD-h%C3%A0o-65016024a',
  },
  {
    name: 'Trần Hùng Hải',
    position: 'Business analyst',
    quote:
      "As a developer, I'm always striving for perfection and pushing myself to learn and grow. It's a privilege to be part of a team",
    image: hai,
    background: '',
    gitLink: 'https://github.com/LuciusTheLust',
    inLink: 'https://www.facebook.com/mr.raindrop18',
  },
  {
    name: 'Võ Tấn Phát',
    position: 'DevOps',
    quote:
      " I'm inspired by the creativity and innovation of my colleagues, and I feel fortunate to be part of such collaborative team",
    image: phat,
    background: '',
    gitLink: 'https://github.com/recca5p',
    inLink: 'https://www.linkedin.com/in/tan-phat-vo-51ba10272',
  },
  {
    name: 'Trần Văn Thịnh',
    position: 'Back-end developer',
    quote:
      "For me, the most rewarding part of being a developer is seeing the impact that our solutions have on our clients' businesses.",
    image: thinh,
    background: '',
    gitLink: 'https://github.com/vathinh',
    inLink: 'https://www.linkedin.com/in/thinh-tran-4aa968272',
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
            image={item.image}
            key={i}
            name={item.name}
            position={item.position}
            quote={item.quote}
            gitLink={item.gitLink}
            inLink={item.inLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ContainerAbout;
