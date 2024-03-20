import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <h3>Contact</h3>
      <form
        className={styles["form-container"]}
        action="https://getform.io/f/panveeva"
        method="POST"
      >
        <input type="text" id="name" placeholder="Name" name="name" required/>
        <input type="email" placeholder="E-mail address" name="email" required/>
        <textarea rows="16" cols="40" placeholder="Enter message" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
