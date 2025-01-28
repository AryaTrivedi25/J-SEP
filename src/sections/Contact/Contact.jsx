import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact US</h1>
      <form action="https://formspree.io/f/movjdvow" method='post'>
        <div className="formGroup">
          <label htmlFor="name" />
          <input 
          type="text"
          name='name'
          id='name'
          placeholder='Name'
          required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" />
          <input 
          type="email"
          name='email'
          id='email'
          placeholder='Email'
          required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" />
          <textarea 
          name='message'
          id='message'
          placeholder='Message'
          required
          />
        </div>
        <input className='hover btn' type="submit" value='Submit'/>
      </form>
    </section>
  )
}

export default Contact;