import { useState } from 'react'
import { SlEmotsmile } from 'react-icons/sl'

const Contact = ({ id, footer }) => {
  const [values, setValues] = useState({
    email: '',
    message: '',
  })
  const [submit, setSubmit] = useState(false)

  const { email, message } = values

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
    const formData = {}

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    fetch('/api/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status === 200) {
          setValues({
            email: '',
            message: '',
          })
          setSubmit(false)
        }
      })
      .catch((error) => {
        error
      })
  }

  return (
    <div className="contact section" id={id}>
      <div className="section__heading section__loading">
        <h2>
          <span>CONTACT</span> US
        </h2>
        {submit && (
          <div className="lds-heart ">
            <div></div>
          </div>
        )}
      </div>
      <div className="contact__form--wrap">
        <div className="contact__info">
          <p>We also have many dificulties in accessing new markets and that is also out next challenge.</p>
          <p>
            We&apos;re so pround of all the people at STUNITED who have accompanied over the years and thanks to all the
            companies and individual parents of STUNITED.
          </p>
          <p>All good and bad information are accepted. Have a good day Madam, Sir!</p>
        </div>
        <div className="contact__form">
          <p>If you are looking for manpower. Why not us? You can contact bellow <SlEmotsmile/> </p> 
          <form action="/send-data-here" method="post" className=" send__data" onSubmit={handleOnSubmit}>
            <div className="form__item">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={email} required onChange={handleChange} />
            </div>
            <div className="form__item">
              <label required>Your message</label>
              <textarea id="message" type="text" name="message" value={message} required onChange={handleChange} />
            </div>
            <button type="submit" className="button__submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="contact__footer">
        {footer.map((item, index) => {
          return (
            <div key={index} className="content__main">
              <span className="content__icon">{item.icon}</span>
              <span className="title">{item.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact
