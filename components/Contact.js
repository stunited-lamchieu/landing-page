const Contact = (props) => {
  const {id} = props
  return (
    <div id={id} className="row">
      <div className="col-12 contact__title">CONTACT US</div>
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
        <form action="/send-data-here" method="post" className="row send-data">
          <label className="col-8" for="first">
            Email
          </label>
          <input
            className="col-8 input"
            type="text"
            id="first"
            name="first"
            required
          />
          <label className="col-8" for="last" required>
            Your message:
          </label>
          <textarea className="input" type="text" id="last" name="last" />
          <button type="submit" className="button__submit col-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
