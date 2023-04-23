interface IFrameCarouselProps {
  title: string;
  description: string;
  image: string;
  background: string;
}
const FrameCarousel = ({
  title,
  description,
  image,
  background,
}: IFrameCarouselProps) => {
  return (
    <div
      className={`h-full w-full flex align-center ${background}`}
      // style={{
      //   backgroundColor: 'Tomatoe',
      // }}
    >
      <div className='w-1/2 h-full flex justify-center items-center'>
        <img src={image} alt='Image 1' className='w-[600px] object-cover' />
      </div>
      <div className='w-1/2 flex flex-col justify-center h-full'>
        <div>
          <div className='font-["MuseoModernoSemiBold"] text-[12px] sm:text-[20px] lg:text-[30px]'>
            {title}
          </div>
        </div>
        <p
          className='text-[18px] font-["MuseoModerno"] overflow-hidden pr-5'
          style={{ margin: '0' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FrameCarousel;
