interface ICardWorkProps {
  index: number;
  title: string;
  description: string;
  image: string;
}
const CardWork = ({ title, index, description, image }: ICardWorkProps) => {
  return (
    <div className='h-fit md:h-[40.5vh] ease-in duration-300 w-full relative bg-white hover:bg-[rgba(255,255,255,.7)]'>
      <img
        className='absolute h-full w-full object-cover z-[-1]'
        src={image}
        alt='workflow-bg'
      />
      <div className='pl-10 pt-10 font-["MuseoModernoSemiBold"] text-[22px] md:text-[30px]'>
        <span className='border-4 border-tawny px-3 mr-3 rounded-[50%]'>
          {index + 1}.
        </span>
        {title}
      </div>
      <div className='w-full h-full py-5 flex justify-center items-center font-["MuseoModerno"] text-[18px] md:text-[22px]'>
        <div className='w-[70%] text-ellipsis h-full text-center'>
          {description}
        </div>
      </div>
    </div>
  );
};

export default CardWork;
