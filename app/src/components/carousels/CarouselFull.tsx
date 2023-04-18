import Carousel from 're-carousel';
import ButtonNavigate from '../buttons/ButtonNavigate';
import IndicatorNavigate from '../indicator/IndicatorNavigate';
import carsoupic from '../../assets/images/backgrounds/carouselpic.png';
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
              backgroundColor: 'LightGray',
              height: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <img
              src={carsoupic}
              alt='Image 1'
              style={{
                height: '40%',
                width: '40%',
                maxWidth: '100%',
                maxHeight: '100%',
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
                <div
                  style={{
                    marginBottom: '0.5rem',
                    fontSize: '2rem',
                    fontFamily: 'MuseoModernoSemiBold',
                  }}
                >
                  Title 1
                </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'MuseoModerno',
                  }}
                >
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
              backgroundColor: 'LightGray',
              height: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <img
              src={carsoupic}
              alt='Image 1'
              style={{
                height: '40%',
                width: '40%',
                maxWidth: '100%',
                maxHeight: '100%',
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
                <div
                  style={{
                    marginBottom: '0.5rem',
                    fontSize: '2rem',
                    fontFamily: 'MuseoModernoSemiBold',
                  }}
                >
                  Title 1
                </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'MuseoModerno',
                  }}
                >
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
              backgroundColor: 'LightGray',
              height: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <img
              src={carsoupic}
              alt='Image 1'
              style={{
                height: '40%',
                width: '40%',
                maxWidth: '100%',
                maxHeight: '100%',
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
                <div
                  style={{
                    marginBottom: '0.5rem',
                    fontSize: '2rem',
                    fontFamily: 'MuseoModernoSemiBold',
                  }}
                >
                  Title 1
                </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'MuseoModerno',
                  }}
                >
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
