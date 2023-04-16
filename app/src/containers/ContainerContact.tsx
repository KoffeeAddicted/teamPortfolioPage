import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

const ContainerContact = () => {
  return (
    <div className='w-full h-[60vh] pl-[40px] bg-grey-light text-[30px] sm:text-[40px] lg:text-[55px] font-["MuseoModernoThicc"]'>
      <div className='h-fit w-full flex py-[50px]'>
        <div>Contact</div>
      </div>
      <div className='font-["MuseoModernoLight"] text-[16px] md:text-[20px]'>
        <div>Phone: </div>
        <div>Email: </div>
        <div>Address: 115/60 Tran Dinh Xu, District 1, Ho Chi Minh city</div>
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
