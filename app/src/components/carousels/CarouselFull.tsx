import Carousel from 're-carousel';
import ButtonNavigate from '../buttons/ButtonNavigate';
import IndicatorNavigate from '../indicator/IndicatorNavigate';
import CircleShape from '../3d/CircleShape';
import dotGrid from '../../assets/images/backgrounds/dotGrid.png';
const CarouselFull = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-slate-200'>
      <Carousel
        //style={{ zIndex: '0' }}
        loop
        frames={[
          <div className='h-full bg-grey-light relative'>
            <div className='w-full h-full flex justify-center items-center'>
              <div className='w-[40%] h-full z-10'>
                <CircleShape />
              </div>
              <div className='w-[60%] h-full flex items-center'>
                <div className='flex flex-col justify-start'>
                  <div className="font-['MuseoModernoThicc'] py-5 text-[30px] sm:text-[40px] lg:text-[55px] w-[80%] lg:w-[60%]">
                    Frame 1
                  </div>
                  <div>
                    <p
                      className='text-[18px] font-["MuseoModerno"] overflow-hidden pr-5'
                      style={{ margin: '0' }}
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Hic nam ipsa dolores pariatur quisquam quis error
                      quibusdam dicta mollitia incidunt cum aliquam totam omnis
                      exercitationem ad et, eum, in consequuntur?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className='w-[25%] max-w-[150px] absolute bottom-[2.5rem] left-[2.5rem] z-0'
              src={dotGrid}
            />
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
