// import Carousel from 're-carousel';
// import ButtonNavigate from '../buttons/ButtonNavigate';
// import IndicatorNavigate from '../indicator/IndicatorNavigate';
import CircleShape from '../3d/CircleShape';
import dotGrid from '../../assets/images/backgrounds/dotGrid.png';
import { useT } from '../../hooks/usei18n';

const CarouselFull = () => {
  let t = useT('translation');

  return (
    <div className='w-full h-[100vh] min-h-[750px] flex justify-center items-center bg-slate-200'>
      {/* Temporary shut down */}
      {/* <Carousel
        loop
        frames={[
          <div className='h-full bg-grey-light relative'>
            <div className='h-full w-full relative'>
              <div className='circle-shape bg-[#FDB9C8] absolute right-[15%] -top-[25%] w-[20%] h-[35%] min-w-[400px] min-h-[400px]' />
              <div className='circle-shape bg-[#F0AEEB] absolute right-[25%] -top-[25%] w-[20%] h-[35%] min-w-[400px] min-h-[400px]' />
              <div className='circle-shape bg-[#C3E5D7] absolute right-[20%] -top-[20%] w-[20%] h-[35%] min-w-[400px] min-h-[400px]' />
            </div>
            <div className='w-full h-full absolute top-0 left-0 flex flex-col-reverse lg:flex-row blur-effect justify-center items-center'>
              <div className='w-full lg:w-[40%] h-1/2 lg:h-full z-10'>
                <CircleShape />
              </div>
              <div className='w-full sm:w-[80%] lg:w-[60%] h-1/2 lg:h-full flex items-end text-center lg:text-start lg:items-center'>
                <div className='flex flex-col justify-start gap-5 px-3'>
                  <div className="font-['MuseoModernoThicc'] py-5 text-[30px] sm:text-[40px] lg:text-[55px] w-full lg:w-[60%]">
                    Frame 1
                  </div>
                  <div>
                    <p className='text-[18px] font-["MuseoModerno"] overflow-hidden pr-[50px]'>
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
          <div className='w-full h-full bg-[#FEFEBE] flex justify-center items-center'>
            <div>
              <div className="font-['MuseoModernoThicc'] py-5 text-[30px] sm:text-[40px] lg:text-[55px] w-full lg:w-[60%]">
                Frame 2
              </div>
              <div>
                <p className='text-[18px] font-["MuseoModerno"] overflow-hidden pr-[50px]'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                  nam ipsa dolores pariatur quisquam quis error quibusdam dicta
                  mollitia incidunt cum aliquam totam omnis exercitationem ad
                  et, eum, in consequuntur?
                </p>
              </div>
            </div>
          </div>,
          <div className='w-full h-full bg-[#C3E5D7] flex justify-center items-center'>
            Frame 3
          </div>,
        ]}
        widgets={[ButtonNavigate, IndicatorNavigate]}
      /> */}
      <div className='h-full w-full bg-grey-light relative'>
        <div className='h-full w-full relative'>
          <div className='circle-shape bg-[#FDB9C8] absolute right-[15%] -top-[25%] w-[20%] h-[35%] min-w-[400px] min-h-[400px]' />
          <div className='circle-shape bg-[#F0AEEB] absolute right-[25%] -top-[25%] w-[20%] h-[35%] min-w-[400px] min-h-[400px]' />
          <div className='circle-shape bg-[#C3E5D7] absolute right-[20%] -top-[20%] w-[20%] h-[35%] min-w-[400px] min-h-[400px]' />
        </div>
        <div className='w-full h-full absolute top-0 left-0 flex flex-col-reverse lg:flex-row blur-effect justify-center items-center'>
          <div className='w-full lg:w-[40%] h-1/2 lg:h-full z-10'>
            <CircleShape />
          </div>
          <div className='w-[70%] sm:w-[80%] lg:w-[60%] h-1/2 lg:h-full flex items-end text-center lg:text-start lg:items-center'>
            <div className='flex flex-col justify-start gap-5 px-3'>
              <div className="font-['MuseoModernoThicc'] py-5 text-[22px] sm:text-[40px] lg:text-[55px] w-full lg:w-[80%]">
                {t('introduction.title')}
              </div>
              <div>
                <p className='text-[13px] sm:text-[22px] font-["MuseoModerno"] overflow-hidden lg:pr-[50px]'>
                  {t('introduction.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className='w-[25%] max-w-[150px] absolute bottom-[2.5rem] left-[2.5rem] z-0'
          src={dotGrid}
        />
      </div>
    </div>
  );
};

export default CarouselFull;
