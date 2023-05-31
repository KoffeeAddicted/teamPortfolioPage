import bg from '../../assets/images/backgrounds/background.jpeg';
import profile from '../../assets/images/backgrounds/profile.webp';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

interface CardProfileProps {
  name: string;
  position: string;
  quote: string;
  image: string;
}

const CardProfile = ({ name, position, quote, image }: CardProfileProps) => {
  return (
    <div className='w-[90%] max-w-[600px] relative md:w-[350px] border-2 rounded-[20px]'>
      <div className='w-full'>
        <img
          src={bg}
          className='rounded-[20px] object-cover w-full h-[150px]'
        />
      </div>
      <div className='w-full -mt-[70px] gap-4 flex flex-col items-center'>
        <img
          src={image}
          className='h-[120px] w-[120px] bg-white border border-1 drop-shadow-md rounded-[50%] object-cover'
        />
        <div className='text-[22px] font-["MuseoModernoSemiBold"]'>{name}</div>
        <div className='text-[18px] font-["MuseoModerno"] border-2 p-1 rounded-[5px] border-dashed border-tawny'>
          {position}
        </div>
        <div className='text-[14px] font-["MuseoModerno"] px-5 text-center max-h-[60px] overflow-hidden'>
          {quote}
        </div>
        <div className='flex text-[26px] gap-3 pb-4 text-grey'>
          <AiOutlineGithub />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
