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
                marginLeft: '1rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h2 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>
                Title 1
              </h2>
              <p style={{ margin: '0' }}>Subtitle 1</p>
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
              alt='Image 2'
              style={{
                height: '40%',
                width: '40%',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
            <div
              style={{
                marginLeft: '1rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h2 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>
                Title 1
              </h2>
              <p style={{ margin: '0' }}>Subtitle 1</p>
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
              alt='Image 3'
              style={{
                height: '40%',
                width: '40%',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
            <div
              style={{
                marginLeft: '1rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h2 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>
                Title 1
              </h2>
              <p style={{ margin: '0' }}>Subtitle 1</p>
            </div>
          </div>,
        ]}
        widgets={[ButtonNavigate, IndicatorNavigate]}
      />
    </div>
  );
};

export default CarouselFull;
