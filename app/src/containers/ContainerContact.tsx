import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { useT } from '../hooks/usei18n';

const ContainerContact = () => {
  let t = useT('translation');
  return (
    <div
      id='contactSection'
      className='w-full h-[60vh] px-[40px] bg-grey-light text-[30px] sm:text-[40px] lg:text-[55px] font-["MuseoModernoThicc"]'
    >
      <div className='h-fit w-full flex py-[50px]'>
        <div>{t('contact.title')}</div>
      </div>
      <div className='font-["MuseoModernoLight"] text-[16px] md:text-[20px]'>
        <div>Phone: {t('contact.phone')}</div>
        <div>Email: {t('contact.email')}</div>
        <div>Address: {t('contact.address')}</div>
      </div>
      <div className='flex gap-[20px] text-[26px] pt-[50px] w-full'>
        <AiFillFacebook />
        <AiFillTwitterSquare />
        <AiOutlineGithub />
        <AiFillLinkedin />
      </div>
    </div>
  );
};

export default ContainerContact;
