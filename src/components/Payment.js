import React from 'react';
import { PaymentInputsContainer } from 'react-payment-inputs';
import Data from './data';
import { useNavigate, useParams } from 'react-router-dom';

function Payment() {

  const navigate = useNavigate()
  let { id } = useParams();
  console.log(Data)
  const props = Data.find((ele) => ele.id == id);

  return (
    <div className='payment-container'>
      <PaymentInputsContainer>
        {({ meta, getCardNumberProps, getExpiryDateProps, getCVCProps }) => (
          <form className='payment-form'>
            <input className='payment-input' {...getCardNumberProps({})} />
            <input className='payment-input' {...getExpiryDateProps({})} />
            <input className='payment-input' {...getCVCProps({})} />
            {meta.isTouched && meta.error && <span className='payment-error'>Error: {meta.error}</span>}
          </form>
        )}
      </PaymentInputsContainer>
      <h5 className='payment-price'>Price: $ {props.price}</h5>
      <button className='payment-btn' type='submit' onClick={() => navigate(`/checkout`)}>Confirm Payment</button>
    </div>
  )
}

export default Payment