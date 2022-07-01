import emailjs from "@emailjs/browser";

const Mailer = () => {
  function sendEmail(e) {
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
  }

  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        flexDirection: "column",
        padding: "1.5rem",
      }}
    >
      <h1 style={{ marginTop: "25px" }}> contact form</h1>
      <form
        className="row"
        style={{ marginTop: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>name</label>
        <input type="text" name="name" className="form-control" />

        <label>Email</label>
        <input type="email" name="user_email" className="form-control" />

        <label>Message</label>
        <textarea type="message" rows="4" className="form-control" />

        <input
          type="submit"
          value="send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};

export default Mailer;
