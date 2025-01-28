import styles from './FooterStyle.module.css';

function getYear() {
  return new Date().getFullYear();
}
function Footer() {
  return (
    <section id='footer' className={styles.container}>
      <p> © {getYear()} J-SEP Legal. <br />
      All rights reserved.
      </p>

    </section>
  )
}

export default Footer