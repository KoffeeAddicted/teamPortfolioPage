import Carousel from 're-carousel';
import ButtonNavigate from '../buttons/ButtonNavigate';
import IndicatorNavigate from '../indicator/IndicatorNavigate';
import carouselPic1 from '../../assets/images/backgrounds/carousel-pic1.jpeg';
import carsouselPic2 from '../../assets/images/backgrounds/carousel-pic2.png';
import carsouselPic3 from '../../assets/images/backgrounds/carousel-pic3.png';
import carsouselPic4 from '../../assets/images/backgrounds/carousel-pic4.png';

const CarouselFull = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-slate-200 z-0'>
      <Carousel
        style={{ zIndex: '0' }}
        auto={true}
        loop
        frames={[
          <div
            style={{
              backgroundColor: 'Tomatoe',
              height: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <img
              src={carsouselPic2}
              alt='Image 1'
              style={{
                width: '400px',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                width: '80%',
                maxWidth: '800px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <div className="font-['MuseoModernoThicc'] py-5 text-center text-[30px] sm:text-[40px] lg:text-[55px] w-[80%] lg:w-[60%]">
                  Title
                </div>
                <div className='font-["MuseoModernoSemiBold"] text-[12px] sm:text-[20px] lg:text-[30px]'>
                  Subtitle 1
                </div>
              </div>
              <p
                className='text-[18px] font-["MuseoModerno"] overflow-hidden'
                style={{ margin: '0' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                nam ipsa dolores pariatur quisquam quis error quibusdam dicta
                mollitia incidunt cum aliquam totam omnis exercitationem ad et,
                eum, in consequuntur?
              </p>
            </div>
          </div>,
          <div
            style={{
              backgroundColor: 'Cornsilk',
              height: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <img
              src={carsouselPic3}
              alt='Image 1'
              style={{
                width: '400px',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                width: '80%',
                maxWidth: '800px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <div className="font-['MuseoModernoThicc'] py-5 text-center text-[30px] sm:text-[40px] lg:text-[55px] w-[80%] lg:w-[60%]">
                  Title
                </div>
                <div className='font-["MuseoModernoSemiBold"] text-[12px] sm:text-[20px] lg:text-[30px]'>
                  Subtitle 1
                </div>
              </div>
              <p
                className='text-[18px] font-["MuseoModerno"] overflow-hidden'
                style={{ margin: '0' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                nam ipsa dolores pariatur quisquam quis error quibusdam dicta
                mollitia incidunt cum aliquam totam omnis exercitationem ad et,
                eum, in consequuntur?
              </p>
            </div>
          </div>,
          <div
            style={{
              backgroundColor: 'LightCyan',
              height: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <img
              src={carsouselPic4}
              alt='Image 1'
              style={{
                width: '400px',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                width: '80%',
                maxWidth: '800px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <div className="font-['MuseoModernoThicc'] py-5 text-center text-[30px] sm:text-[40px] lg:text-[55px] w-[80%] lg:w-[60%]">
                  Title
                </div>
                <div className='font-["MuseoModernoSemiBold"] text-[12px] sm:text-[20px] lg:text-[30px]'>
                  Subtitle 1
                </div>
              </div>
              <p
                className='text-[18px] font-["MuseoModerno"] overflow-hidden'
                style={{ margin: '0' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                nam ipsa dolores pariatur quisquam quis error quibusdam dicta
                mollitia incidunt cum aliquam totam omnis exercitationem ad et,
                eum, in consequuntur?
              </p>
            </div>
          </div>,
        ]}
        widgets={[ButtonNavigate, IndicatorNavigate]}
      />
    </div>
  );
};

export default CarouselFull;
