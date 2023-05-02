import Carousel from 're-carousel';
import ButtonNavigate from '../buttons/ButtonNavigate';
import IndicatorNavigate from '../indicator/IndicatorNavigate';
import CircleShape from '../3d/CircleShape';
const CarouselFull = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-slate-200'>
      <Carousel
        //style={{ zIndex: '0' }}
        loop
        frames={[
          <div className='h-full bg-grey-light'>
            <div className='w-full h-full flex justify-center items-center'>
              <CircleShape />
              <div className='w-full h-full flex items-center'>
                <div>Frame 1</div>
              </div>
            </div>
          </div>,
          <div style={{ backgroundColor: 'orange', height: '100%' }}>
            <div className='w-full h-full flex justify-center items-center'>
              Frame 2
            </div>
          </div>,
          <div style={{ backgroundColor: 'orchid', height: '100%' }}>
            <div className='w-full h-full flex justify-center items-center'>
              Frame 3
            </div>
          </div>,
        ]}
        widgets={[ButtonNavigate, IndicatorNavigate]}
      />
    </div>
  );
};

export default CarouselFull;
