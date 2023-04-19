import img from '../../assets/images/backgrounds/meeting.jpg';
const CardWork = () => {
  return (
    <div className='h-[40.5vh] ease-in duration-300 w-full relative bg-white hover:bg-[rgba(255,255,255,.7)]'>
      <img
        className='absolute h-[40vh] w-full object-cover z-[-1]'
        src={img}
        alt='workflow-bg'
      />
      <div className='pl-10 pt-10 font-["MuseoModernoSemiBold"] text-[30px]'>
        <span className='border-4 border-tawny px-3 mr-3 rounded-[50%]'>
          1.
        </span>
        Business Analysis
      </div>
      <div className='w-full pt-5 flex justify-center items-center font-["MuseoModerno"] text-[25px]'>
        <div className='w-[60%] text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </div>
      </div>
    </div>
  );
};

export default CardWork;
