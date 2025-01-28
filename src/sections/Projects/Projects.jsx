import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import corporate from '../../assets/CorporateAndCommercialLaw.png';
import ipr from '../../assets/IPR.png';
import cyber from '../../assets/IT&cyber.png';
import employment from '../../assets/employment.png';
import arbritration from '../../assets/arbitration.png';
import realEstate from '../../assets/Real Estate Laws.png'

// import Slider from "react-slick";

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Our Expertise</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={corporate} 
        // link =''
        h3 = 'Corporate & Commercial Law'
        p = 'Any Litigation/Agreements'
        />
        <ProjectCard src={ipr} 
        // link =''
        h3 = 'Intellectual Property Rights'
        p = 'Protecting Ideas, Securing Innovation'
        />
        <ProjectCard src={employment} 
        // link =''
        h3 = 'Employment Law & Service Matters'
        p = 'Empowering Workforce, Ensuring Justice'
        />
        <ProjectCard src={arbritration} 
        // link =''
        h3 = 'Dispute Resolution & Arbitration'
        p = 'Resolving Conflicts, Restoring Harmony'
        />
        <ProjectCard src={cyber} 
        // link =''
        h3 = 'IT & Cyber Laws'
        p = 'Securing Digital Rights, Resolving Disputes'
        />
        <ProjectCard src={realEstate} 
        // link =''
        h3 = 'Real Estate Laws'
        p = 'Protecting Property, Securing Transactions'
        />
      </div>
    </section>
  )
}

export default Projects;