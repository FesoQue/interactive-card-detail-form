import React, { useState } from 'react';
import Cleave from 'cleave.js/react';
import check from '../images/icon-complete.svg';

const CardDetailsForm = ({
  cardInfo,
  handleSubmit,
  handleOnChange,
  isSubmitted,
  isSuccessful,
  setIsSuccessful,
}) => {
  let cc_name_blank = isSubmitted && !cardInfo.cc_name;
  let cc_num_format =
    isSubmitted && cardInfo.cc_number && cardInfo.cc_number.length < 19;
  let cc_num_blank = isSubmitted && cardInfo.cc_number === '';
  let month_blank = isSubmitted && !cardInfo.cc_month;
  let year_blank = isSubmitted && !cardInfo.cc_year;
  let date_month_blank =
    isSubmitted && (!cardInfo.cc_month || !cardInfo.cc_year);
  let cvv_blank = isSubmitted && !cardInfo.cvv;
  let cvv_wrong_format = isSubmitted && cardInfo.cvv.length < 3;

  const handleOnInput = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };

  const handleContinue = () => {
    setIsSuccessful(false);
    cardInfo.cc_name = '';
    cardInfo.cc_number = '';
    cardInfo.cc_month = '';
    cardInfo.cc_year = '';
    cardInfo.cvv = '';
  };

  return (
    <div>
      {!isSuccessful ? (
        <form onSubmit={handleSubmit} className='p-4'>
          <div className='mb-6 relative'>
            <label
              className='uppercase text-sm mb-2 block tracking-wider text-very-dark-violet'
              htmlFor='card-name'
            >
              cardholder name
            </label>
            <input
              className={`p-2 w-full  border-2 border-light-grayish-violet rounded-md outline-none text-dark-grayish-violet ${
                cc_name_blank && 'border-2 border-red'
              }`}
              type='text'
              id='card-name'
              name='cc_name'
              value={cardInfo.cc_name}
              onChange={handleOnChange}
              placeholder='e.g. Jane Appleseed'
            />
            {cc_name_blank && (
              <span
                className='absolute block bottom-[-22px]
             text-red text-sm'
              >
                can't be blank
              </span>
            )}
          </div>
          <div className='relative mb-6'>
            <label
              className='uppercase text-sm mb-2 block tracking-wider text-very-dark-violet'
              htmlFor='card-number'
            >
              card number
            </label>
            <Cleave
              className={`p-2 w-full  border-2 border-light-grayish-violet rounded-md outline-none text-dark-grayish-violet ${
                (cc_num_format || cc_num_blank) && 'border-2 border-red'
              }`}
              type='tel'
              options={{ creditCard: true }}
              maxLength={19}
              inputMode='numeric'
              value={cardInfo.cc_number}
              onChange={handleOnChange}
              pattern='[0-9\s]*'
              id='card-number'
              name='cc_number'
              placeholder='e.g. 1234 5678 9123 0000'
            />
            {(cc_num_format && (
              <span
                className='absolute block bottom-[-22px]
             text-red text-sm'
              >
                Wrong format
              </span>
            )) ||
              (cc_num_blank && (
                <span
                  className='absolute block bottom-[-22px]
             text-red text-sm'
                >
                  Can't be blank
                </span>
              ))}
          </div>
          <div className='flex items-center'>
            <div className='w-1/2 mr-4 relative'>
              <label className='uppercase text-sm block mb-2'>
                exp. date(mm/yy)
              </label>
              <div className='flex'>
                <input
                  className={`w-1/2 p-2 border-2 border-light-grayish-violet rounded-md outline-none text-dark-grayish-violet mr-2 ${
                    month_blank && 'border-2 border-red'
                  }`}
                  type='number'
                  maxLength={2}
                  onInput={handleOnInput}
                  value={cardInfo.cc_month}
                  onChange={handleOnChange}
                  name='cc_month'
                  placeholder='MM'
                />
                <input
                  className={`w-1/2 p-2 border-2 border-light-grayish-violet rounded-md outline-none text-dark-grayish-violet ${
                    year_blank && 'border-2 border-red'
                  }`}
                  type='number'
                  onInput={handleOnInput}
                  maxLength={2}
                  value={cardInfo.cc_year}
                  onChange={handleOnChange}
                  name='cc_year'
                  placeholder='YY'
                />
              </div>
              {date_month_blank && (
                <span
                  className='absolute block bottom-[-22px]
             text-red text-sm'
                >
                  can't be blank
                </span>
              )}
            </div>

            <div className='relative w-1/2'>
              <label htmlFor='cvv' className='uppercase mb-2 text-sm block'>
                cvv
              </label>
              <input
                className={`p-2 w-full border-2 border-light-grayish-violet rounded-md outline-none text-dark-grayish-violet ${
                  cvv_blank || cvv_wrong_format ? 'border-2 border-red' : ''
                }`}
                type='number'
                onInput={handleOnInput}
                value={cardInfo.cvv}
                onChange={handleOnChange}
                maxLength={3}
                id='cvv'
                name='cvv'
                placeholder='e.g. 123'
              />
              {(cvv_blank && (
                <span
                  className='absolute block bottom-[-22px]
             text-red text-sm'
                >
                  can't be blank
                </span>
              )) ||
                (cvv_wrong_format && (
                  <span
                    className='absolute block bottom-[-22px]
             text-red text-sm'
                  >
                    wrong format
                  </span>
                ))}
            </div>
          </div>

          <div className='mt-[3rem]'>
            <button
              className='bg-very-dark-violet w-full text-white py-3 rounded-lg'
              type='submit'
            >
              Confirm
            </button>
          </div>
        </form>
      ) : (
        <div className='p-4'>
          <div className='flex justify-center mb-7'>
            <img src={check} alt='complete' />
          </div>
          <div className='text-center mb-[3rem]'>
            <h2 className='text-[2.5rem] text-very-dark-violet'>Thank You!</h2>
            <p className='text-[20px] text-dark-grayish-violet'>
              We've added your card details
            </p>
          </div>
          <div className='mt-[3rem]'>
            <button
              onClick={handleContinue}
              className='bg-very-dark-violet w-full text-white py-3 rounded-lg'
              type='button'
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetailsForm;
