import React from 'react';
import bg_card_back from '../images/bg-card-back.png';
import card_logo from '../images/card-logo.svg';
import bg_card_front from '../images/bg-card-front.png';

const CardDetail = ({ cardInfo }) => {
  return (
    <div className='flex justify-center bg-mobile-bg sm:bg-desktop-bg  h-[17rem] bg-cover relative sm:h-[100%]  '>
      <div className=''>
        <div className='relative top-[30px] w-[320px] right-[-5px] sm:top-[19rem] sm:right-[-2rem] md:right-[-4rem] xl:right-[-8rem] md:shadow-2xl '>
          <img
            className='w-[100%] object-cover'
            src={bg_card_back}
            alt='card back'
          />
          <div className='absolute top-[42%] right-[40px]'>
            <span className='text-white'>
              {cardInfo.cvv ? cardInfo.cvv : '000'}
            </span>
          </div>
        </div>
        <div className='relative top-[-28px]  w-[320px] left-[-5px] shadow-2xl sm:top-[-5rem] sm:left-[2rem] xl:left-[4rem]'>
          <img
            className='w-[100%] object-cover'
            src={bg_card_front}
            alt='card front'
          />

          <div className='absolute top-4 left-4'>
            <img className='w-[70px]' src={card_logo} alt='logo' />
          </div>
          <div className='absolute top-[52%] left-4'>
            <p className='text-white tracking-[4.5px] mb-3'>
              {cardInfo.cc_number ? cardInfo.cc_number : '0000 0000 0000 0000'}
            </p>
            <div className='flex justify-between items-center relative mt-7 w-[280px]'>
              <p className='absolute uppercase text-sm text-light-grayish-violet tracking-wider'>
                {cardInfo.cc_name ? cardInfo.cc_name : 'jane appleseed'}
              </p>
              <span className='absolute  right-0 text-light-grayish-violet text-sm'>
                {cardInfo.cc_month ? cardInfo.cc_month : '00'}/
                {cardInfo.cc_year ? cardInfo.cc_year : '00'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
