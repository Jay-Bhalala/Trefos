import emailjs from "@emailjs/browser";

const Mailer = () => {
  function sendEmail(e, onSubmitProps) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s67ngfy",
        "template_laz46z4",
        e.target,
        "sPYgzjoOeQ5WeSml6"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    e.target.reset();
  }

  return (
    <div
      className="container border contact-container"
      style={{
        marginTop: "50px",
        flexDirection: "column",
        padding: "2.2rem",
      }}
    >
      <h1 style={{ marginTop: "25px" }}> Contact Form</h1>
      <form
        className="row"
        style={{ marginTop: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="name" className="form-control" />

        <label>Email</label>
        <input type="email" name="user_email" className="form-control" />

        <label>Message</label>
        <textarea
          type="message"
          name="message"
          rows="4"
          className="form-control"
        />

        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};

export default Mailer;
