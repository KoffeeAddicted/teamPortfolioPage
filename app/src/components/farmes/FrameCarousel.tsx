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
      <div className='w-full h-[60vh] sm:w-[45%] sm:h-full flex justify-center items-center'>
        <div className='w-fit -ml-[20px] sm:m-0 relative px-4'>
          <img src={image} alt='Image 1' className='w-[800px] object-cover' />
          {image2 && (
            <img
              src={image2}
              alt='Image 2'
              className='object-cover absolute top-[10%] bounce2 right-0 left-[50%] w-[200px] sm:w-[150px] md:w-[200px]'
            />
          )}
        </div>
      </div>
      <div className='w-full sm:w-[55%] px-5 sm:p-0 flex flex-col gap-4 justify-center h-fit sm:h-full'>
        <div>
          <div className='font-["MuseoModernoThicc"] text-[26px] sm:text-[30px] lg:text-[35px]'>
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
