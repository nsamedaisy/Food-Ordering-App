import React from 'react'

function Contact() {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' />

        <label htmlFor='email'>E-mail:</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='location'>Location:</label>
        <input type='link' id='link' link='link' />

        <div className='contact-btn'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact