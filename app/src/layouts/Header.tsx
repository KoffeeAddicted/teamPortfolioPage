import coffee_outline from '../assets/images/logos/coffee_outline.png';
import coffee_bold from '../assets/images/logos/coffee_bold.png';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
const Header = () => {
  return (
    <div className='w-full h-[20vh] bg-blue-500 flex items-center items-between'>
      <div className='w-full h-fit flex items-center justify-between'>
        <div id='cf' className='ml-10'>
          <img className='top' src={coffee_outline} alt='logo' />
          <img className='bottom' src={coffee_bold} alt='logo_hover' />
        </div>
        <div className='ml-[100px] flex gap-[100px]'>
          <div>Home</div>
          <div>Contact</div>
          <div>About</div>
        </div>
        <div className='flex gap-10 mr-10 items-center'>
          <BsTelephone />
          <AiOutlineMail />
          <div>Button Slider</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
