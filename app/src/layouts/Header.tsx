import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { useTranslation } from 'react-i18next';

import coffee_outline from '../assets/images/logos/coffee_outline.png';
import coffee_bold from '../assets/images/logos/coffee_bold.png';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { ButtonSlider } from '../components';
import clsx from 'clsx';
import { useSrollDirection, useChangeLanguage } from '../hooks';
import { useEffect, useState } from 'react';

export let handle = { i18n: 'header' };

const Header = () => {
  const { toggleSidebar } = useProSidebar();
  const scrollDirection = useSrollDirection();
  const [toggleLanguages, SetToggleLanguages] = useState(false);

  let { t } = useTranslation('header');
  let locale = toggleLanguages ? 'vn' : 'en';
  useChangeLanguage(locale);

  return (
    <div
      className={clsx(
        'top-0 w-full absolute flex items-center font-["MuseoModerno"] text-[14px] items-between z-20',
        'lg:text-[18px]',
        scrollDirection === 'up'
          ? 'sticky border border-t-1 h-[10vh] bg-[white]'
          : 'h-[20vh]'
      )}
    >
      <div className='w-full h-fit relative flex items-center justify-between'>
        <div id='cf' className='ml-10'>
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
            <div>{t('home')}</div>
            <div>{t('contact')}</div>
            <div>{t('about')}</div>
          </div>
          <div className='flex gap-10 mr-12 items-center'>
            <BsTelephone />
            <AiOutlineMail />
            <ButtonSlider
              setState={() => SetToggleLanguages((prev) => !prev)}
            />
          </div>
        </div>
        <div className='md:hidden text-[30px] pr-3'>
          <Sidebar breakPoint='always' rtl className='bg-[white]'>
            <Menu className='text-[14px] text-center'>
              <MenuItem>{t('home')}</MenuItem>
              <MenuItem>{t('contact')}</MenuItem>
              <MenuItem>{t('about')}</MenuItem>
              <div className='flex gap-10 py-8 w-full justify-center text-[14px] items-center'>
                <BsTelephone />
                <AiOutlineMail />
                <ButtonSlider
                  setState={() => SetToggleLanguages((prev) => !prev)}
                />{' '}
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
