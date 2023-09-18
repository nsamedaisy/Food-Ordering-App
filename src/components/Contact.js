import React from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import Data from './data';

const initialValues = {
  name: '',
  email: '',
  address: '',
  location: ''
}

const onSubmit = values => {
  console.log('Form data', values)
}
const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.address) {
    errors.address = 'Required'
  }

  if (!values.location) {
    errors.location = 'Required'
  }
  return errors
}

function Contact() {
  const navigate = useNavigate()

  let { id } = useParams();
  console.log(Data)
  const props = Data.find((ele) => ele.id == id);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  // console.log('visited fields', formik.touched)

  return (
    <div className='form-container' >

      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>

        <div className='form-control'>
          <label htmlFor='email'>E-mail:</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.name && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
        </div>

        <div className='form-control'>
          <label htmlFor='address'>Address:</label>
          <input
            type='address'
            id='address'
            name='address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.name && formik.errors.address ? <div className='error'>{formik.errors.address}</div> : null}
        </div>

        <div className='form-control'>
          <label htmlFor='location'>Location:</label>
          <input
            type='location'
            id='link'
            name='location'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          />
          {formik.touched.name && formik.errors.location ? <div className='error'>{formik.errors.location}</div> : null}
        </div>

        <div className='contact-btn'>
          <button type='submit' onClick={() => navigate(`/${props.id}/payment`)}>Submit</button>
        </div>
      </form>
    </div >
  )
}

export default Contact