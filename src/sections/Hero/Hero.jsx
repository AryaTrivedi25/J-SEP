import styles from './HeroStyles.module.css';
import logoImgLight from '../../assets/logo-dark.png';
import logoImgDark from '../../assets/logo-light.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterIconLight from '../../assets/twitter-light.svg';
import twitterIconDark from '../../assets/twitter-dark.svg';

import instaIconLight from '../../assets/instagramLight.png';
import instaIconDark from '../../assets/instagramDarkNEW.png';
import linkedInIconLight from '../../assets/linkedin-light.svg';
import linkedInIconDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterIconLight : twitterIconDark;
  const instaIcon = theme === 'light' ? instaIconLight : instaIconDark;
  const linkedInIcon = theme === 'light' ? linkedInIconLight : linkedInIconDark;
  const logo = theme == 'light' ? logoImgLight : logoImgDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={logo}
          className={styles.hero}
          alt="Logo J-Sep Legal"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          />
      </div>
      <div className={styles.info}>
        <h1>
          J-SEP <br /> 
          Legal
        </h1>
        <h2>Law Firm</h2>
        <span>
          <a href="https://www.instagram.com/jseplegal/" target='blank'>
            <img src={instaIcon} alt="Instagram icon" />
          </a>
          <a href="https://www.linkedin.com/company/j-sep-legal/about/?viewAsMember=true" target='blank'>
            <img src={linkedInIcon} alt="LinkedIN icon" />
          </a>
          <a href="https://x.com/JsepLegal" target='blank'>
            <img src={twitterIcon} alt="twitter icon" />
          </a>
        </span>
        <p className={styles.description}>Powering Your Legal Success with Innovation, Insight, and Excellence.</p>
        <a href="https://drive.google.com/file/d/1igxYZqzU06vqaRyQJ-uZVCMdgJF_Ri27/view?usp=sharing" target='_blank'>
          <button className='hover'> Dowmload Brochure &#11015;</button>
        </a>
      </div>
    </section>
  )
}

export default Hero;