import React, { useEffect, useState } from 'react';
import CardDetailsForm from './components/CardDetailsForm';
import CardDetail from './components/CardDetail';

const App = () => {
  const [cardInfo, setCardInfo] = useState({
    cc_name: '',
    cc_number: '',
    cc_month: '',
    cc_year: '',
    cvv: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setCardInfo({ ...cardInfo, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      cardInfo.cc_name !== '' &&
      cardInfo.cc_number !== '' &&
      cardInfo.cc_number.length === 19 &&
      cardInfo.cc_month !== '' &&
      cardInfo.cc_year !== '' &&
      cardInfo.cvv !== '' &&
      cardInfo.cvv.length === 3
    ) {
      setIsSuccessful(true);
    }
  };

  setTimeout(() => {
    setIsSubmitted(false);
  }, 4000);

  return (
    <div className='sm:flex sm:flex-col sm:h-[100vh] items-center justify-center '>
      <div
        className='sm:flex sm:h-[80vh] items-center max-w-[900px] sm:mx-auto sm:rounded-md'
        id='card-wrapper'
      >
        <div className='mb-[7rem] sm:mb-[0] sm:h-[100%]  sm:mx-auto'>
          <CardDetail cardInfo={cardInfo} />
        </div>
        <div className='sm:h-[100%] sm:flex sm:items-center sm:pl-[2rem] md:pl-[7rem] xl:pl-[11rem]'>
          <CardDetailsForm
            cardInfo={cardInfo}
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit}
            isSubmitted={isSubmitted}
            isSuccessful={isSuccessful}
            setIsSuccessful={setIsSuccessful}
          />
        </div>
      </div>
      <div className='mt-8 text-sm text-center'>
        Challenge by{' '}
        <a
          className='text-[#610595]'
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a className='text-[#6348FE]' href='#'>
          Adefeso Qudus A.
        </a>
        .
      </div>
    </div>
  );
};

export default App;
