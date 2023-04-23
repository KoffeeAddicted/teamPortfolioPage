interface IFrameCarouselProps {
  title: string;
  description: string;
  image: string;
  background: string;
  image2?: string;
}
const FrameCarousel = ({
  title,
  description,
  image,
  background,
  image2,
}: IFrameCarouselProps) => {
  return (
    <div
      className={`h-full w-full flex flex-col justify-center sm:justify-normal sm:flex-row align-center ${background}`}
      // style={{
      //   backgroundColor: 'Tomatoe',
      // }}
    >
      <div className='w-full sm:w-1/2 h-full flex justify-center items-center'>
        <div className='w-fit relative'>
          <img src={image} alt='Image 1' className='w-[600px] object-cover' />
          {image2 && (
            <img
              src={image2}
              alt='Image 2'
              className='object-cover absolute top-[10%] right-0 left-[50%] w-[200px]'
            />
          )}
        </div>
      </div>
      <div className='w-full sm:w-1/2 flex flex-col justify-center h-full'>
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
