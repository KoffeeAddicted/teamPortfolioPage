import Carousel from 're-carousel';
import ButtonNavigate from '../buttons/ButtonNavigate';
import IndicatorNavigate from '../indicator/IndicatorNavigate';
const CarouselFull = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-slate-200 z-0'>
      <Carousel
        style={{ zIndex: '0' }}
        auto={true}
        loop
        frames={[
          <div style={{ backgroundColor: 'tomato', height: '100%' }}>
            <div className='w-full h-full flex justify-center items-center'>
              Frame 1
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
