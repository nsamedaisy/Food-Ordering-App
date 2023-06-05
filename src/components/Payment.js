import React from 'react';
import { PaymentInputsContainer } from 'react-payment-inputs';

function Payment() {
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
      <button className='payment-btn' type='submit'>Confirm Payment</button>
    </div>
  )
}

export default Payment