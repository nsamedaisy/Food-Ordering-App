import React from 'react';
import { PaymentInputsContainer } from 'react-payment-inputs';

function Payment() {
  return (
    <PaymentInputsContainer>
      {({ meta, getCardNumberProps, getExpiryDateProps, getCVCProps }) => (
        <form className='payment-form'>
          <input {...getCardNumberProps({})} />
          <input {...getExpiryDateProps({})} />
          <input {...getCVCProps({})} />
          {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
        </form>
      )}
    </PaymentInputsContainer>
  )
}

export default Payment