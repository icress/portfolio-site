import Card from './card';
import CardGrid from './cardGrid';
import styles from '../page.module.css';


export default function Projects() {
    return (
        <section>
        <h2 className={styles.subheader}>Projects</h2>
        <CardGrid>
        <Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://yelp-camp-icress.vercel.app/'>YelpCamp</a></h2>
            <p className={styles.cardContent}>Full CRUD operations with validation, error handling, and more for a website that allows you to view, upload, and review campsites</p>
            <strong>JavaScript, Express, Node, MongoDB, HTML, CSS, Bootstrap</strong>
          </Card>
          <Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://highqualitynonsense.onrender.com/'>High Quality Nonsense</a></h2>
            <p className={styles.cardContent}>Blog website for publishing my thoughts, opnions, or random musings</p>
            <strong>Python, HTML, CSS, Jinja, Flask, Bootstrap, SQLite, SQLAlchemy</strong>
          </Card>
          <Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://thecoffeespot.onrender.com/'>Coffee Spot</a></h2>
            <p className={styles.cardContent}>Web app that allows the user to add cafes to a database and see a list of all their cafes. </p>
            <strong>Python, HTML, CSS, Jinja, Flask, Bootstrap, SQLite, SQLAlchemy</strong>
          </Card>
          <Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://github.com/icress/job-skill-searcher'>Job Skill Searcher</a></h2>
            <p className={styles.cardContent}>Automation project scans job postings for specified skills and gathers data to tell which skills are currently in demand. </p>
            <strong>Python, Selenium</strong>
          </Card>
          <Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://github.com/icress/youtube-spoiler-filter'>YouTube Spoiler Filter</a></h2>
            <p className={styles.cardContent}>This project searches YouTube and filters out any videos with titles containing specified words that could lead to spoilers.</p>
            <strong>Python, Selenium</strong>
          </Card>
          <Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://icress.github.io/to-do-js/'>To Do List</a></h2>
            <p className={styles.cardContent}>Simple and stylish to do list</p>
            <strong>JavaScript, HTML, CSS, Bootstrap</strong>
          </Card>
          <Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://icress.github.io/scorekeeper/'>Scorekeeper</a></h2>
            <p className={styles.cardContent}>Web app used for tracking scores</p>
            <strong>JavaScript, HTML, CSS, Bulma</strong>
          </Card>
        </CardGrid>
        </section>
    )
}