import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

import coffee_outline from '../assets/images/logos/coffee_outline.png';
import coffee_bold from '../assets/images/logos/coffee_bold.png';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { ButtonSlider } from '../components';
import clsx from 'clsx';
import { useSrollDirection } from '../hooks';
import { useT } from '../hooks/usei18n';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { toggleSidebar } = useProSidebar();

  const scrollDirection = useSrollDirection();
  const [onCheck, setOnCheck] = useState(false);
  let { i18n } = useTranslation();
  let t = useT('translation');

  useEffect(() => {
    i18n.changeLanguage(onCheck ? 'vn' : 'en');
  }, [onCheck]);

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === 'homeSection') {
        window.scrollTo(0, 0);
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={clsx(
        'top-0 w-full absolute flex items-center font-["MuseoModerno"] text-[14px] items-between z-[999]',
        'lg:text-[18px]',
        scrollDirection === 'up'
          ? 'absolute md:sticky md:border border-t-1 h-[20vh] md:h-[10vh] md:bg-[white]'
          : 'h-[20vh]'
      )}
    >
      <div className='w-full h-fit relative flex items-center justify-between'>
        <div id='cf' className='ml-2 md:ml-10'>
          <img className='top' src={coffee_outline} alt='logo' />
          <img className='bottom' src={coffee_bold} alt='logo_hover' />
        </div>
        <div className='hidden md:flex'>
          <div
            className={clsx(
              'flex gap-[40px] absolute header_menu',
              'lg:gap-[80px]'
            )}
          >
            <div
              className='cursor-pointer'
              onClick={() => handleClickScroll('homeSection')}
            >
              {t('header.home')}
            </div>
            <div
              className='cursor-pointer'
              onClick={() => handleClickScroll('aboutSection')}
            >
              {t('header.about')}
            </div>
            <div
              className='cursor-pointer'
              onClick={() => handleClickScroll('contactSection')}
            >
              {t('header.contact')}
            </div>
          </div>
          <div className='flex gap-10 mr-12 items-center'>
            <BsTelephone />
            <AiOutlineMail />
            <ButtonSlider setOnCheck={setOnCheck} />
          </div>
        </div>
        <div className='md:hidden text-[30px] pr-3'>
          <Sidebar
            breakPoint='always'
            rtl
            className='bg-[white] md:hidden text-[30px] pr-3'
          >
            <Menu className='text-[14px] text-center'>
              <MenuItem
                onClick={() => {
                  handleClickScroll('homeSection'), toggleSidebar();
                }}
              >
                {t('header.home')}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClickScroll('aboutSection'), toggleSidebar();
                }}
              >
                {t('header.about')}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClickScroll('contactSection'), toggleSidebar();
                }}
              >
                {t('header.contact')}
              </MenuItem>
              <div className='flex gap-10 py-8 w-full justify-center text-[14px] items-center'>
                <BsTelephone />
                <AiOutlineMail />
                <ButtonSlider setOnCheck={setOnCheck} />
              </div>
            </Menu>
          </Sidebar>
          <BiMenuAltRight onClick={() => toggleSidebar()} />
        </div>
      </div>
    </div>
  );
};

export default Header;
