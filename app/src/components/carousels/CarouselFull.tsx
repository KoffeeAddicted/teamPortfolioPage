import Carousel from 're-carousel';
import ButtonNavigate from '../buttons/ButtonNavigate';
import IndicatorNavigate from '../indicator/IndicatorNavigate';
import test from '../../assets/images/backgrounds/test.png';
import carsouselPic2 from '../../assets/images/backgrounds/carousel-pic2.png';
import carsouselPic3 from '../../assets/images/backgrounds/carousel-pic3.png';
import carsouselPic4 from '../../assets/images/backgrounds/carousel-pic4.png';
import carsouselPic5 from '../../assets/images/backgrounds/carousel-pic5.png';
import carsouselPic6 from '../../assets/images/backgrounds/carousel-pic6.png';
import carsouselPic7 from '../../assets/images/backgrounds/carousel-pic7.png';
import carsouselPic8 from '../../assets/images/backgrounds/carousel-pic8.png';

import FrameCarousel from '../farmes/FrameCarousel';

const CarouselFull = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-slate-200'>
      <Carousel
        //style={{ zIndex: '0' }}
        auto={false}
        loop
        frames={[
          <FrameCarousel
            title='Subtitle 1'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
            nam ipsa dolores pariatur quisquam quis error quibusdam dicta
            mollitia incidunt cum aliquam totam omnis exercitationem ad et,
            eum, in consequuntur?'
            image={carsouselPic5}
            background='bg-[Tomatoe]'
            image2={carsouselPic8}
          />,
          <FrameCarousel
            title='Subtitle 1'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
          nam ipsa dolores pariatur quisquam quis error quibusdam dicta
          mollitia incidunt cum aliquam totam omnis exercitationem ad et,
          eum, in consequuntur?'
            image={test}
            background='bg-[Cornsilk]'
          />,
          <FrameCarousel
            title='Subtitle 1'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
        nam ipsa dolores pariatur quisquam quis error quibusdam dicta
        mollitia incidunt cum aliquam totam omnis exercitationem ad et,
        eum, in consequuntur?'
            image={test}
            background='bg-[LightCyan]'
          />,
        ]}
        widgets={[ButtonNavigate, IndicatorNavigate]}
      />
    </div>
  );
};

export default CarouselFull;
