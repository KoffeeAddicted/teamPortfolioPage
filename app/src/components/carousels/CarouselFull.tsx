import Carousel from 're-carousel';
import ButtonNavigate from '../buttons/ButtonNavigate';
const CarouselFull = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-slate-200 z-0'>
      <Carousel
        style={{ zIndex: '0' }}
        auto={true}
        loop
        frames={[
          <div style={{ backgroundColor: 'tomato', height: '100%' }}>
            Frame 1
          </div>,
          <div style={{ backgroundColor: 'orange', height: '100%' }}>
            Frame 2
          </div>,
          <div style={{ backgroundColor: 'orchid', height: '100%' }}>
            Frame 3
          </div>,
        ]}
        widgets={[ButtonNavigate]}
      />
    </div>
  );
};

export default CarouselFull;
