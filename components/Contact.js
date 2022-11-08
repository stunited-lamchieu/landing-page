import { useState } from "react";
import axios from "axios";

const Contact = (props) => {
  const [values, setValues] = useState({
    email: "",
    message: "",
  });

  const { email, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const { id } = props;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    axios
      .post("api/mail", JSON.stringify(formData))
      .then((response) => {
        console.log('res', response);
      })
      .catch((error) => console.log('erroe', error));
    // try {
    //   fetch("api/mail"),
    //     {
    //       method: "POST",
    //       body: JSON.stringify(formData),
    //     };
    //   console.log(formData);
    // } catch (error) {
    //   console.log(error);
    // }

    fetch("api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log("abc", res);
      if (res.status === 200) {
        console.log(res);
      }
    });
    // console.log(formData);
  };

  return (
    <div id={id} className="row contact">
      <h2 className="col-12 contact__title">
        <span>CONTACT</span> US
      </h2>
      <div className="col-4 contact__info">
        <p>
          We also have many dificulties in accessing new markets and that is
          also out next challenge.
        </p>
        <p>
          We're so pround of all the people at STUNITED who have accompanied
          over the years and thanks to all the companies and individual parents
          of STUNITED.
        </p>
        <p>
          All good and bad information are accepted. Have a good day Madam, Sir!
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
              name="message"
              value={message}
              onChange={handleChange}
            />
            <button type="submit" className="button__submit col-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
