import { useState } from "react";

const Contact = (props) => {
  const [values, setValues] = useState({
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);

  const { email, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const { id } = props;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    fetch("/api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status === 200) {
          setValues({
            email: "",
            message: "",
          });
          setSubmit(false);
        }
      })
      .catch((error) => {
        error;
      });
  };

  return (
    <div className="container-fluid">
      <div id={id} className="row contact">
        {submit && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <h2 className="text-center header__title text-uppercase">
          <span>CONTACT</span> US
        </h2>
        <div className="col-4 contact__info">
          <p>
            We also have many dificulties in accessing new markets and that is
            also out next challenge.
          </p>
          <p>
            We're so pround of all the people at STUNITED who have accompanied
            over the years and thanks to all the companies and individual
            parents of STUNITED.
          </p>
          <p>
            All good and bad information are accepted. Have a good day Madam,
            Sir!
          </p>
        </div>
        <div className="col-8 contact__form">
          <p>
            If you are looking for manpower. Why not us? You can contact bellow.
          </p>
          <form
            action="/send-data-here"
            method="post"
            className="row send__data"
            onSubmit={handleOnSubmit}
          >
            <div className="col-8">
              <label className="col-12" htmlFor="email">
                Email
              </label>
              <input
                className=" input col-12"
                id="email"
                type="email"
                name="email"
                value={email}
                required
                onChange={handleChange}
              />
              <label htmlFor="message" required className=" col-12">
                Your message:
              </label>
              <textarea
                className="input col-12 "
                id="message"
                type="text"
                name="message"
                value={message}
                required
                onChange={handleChange}
              />
              <button type="submit" className="button__submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
