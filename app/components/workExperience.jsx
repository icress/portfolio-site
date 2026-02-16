import styles from './work.module.css'

export default function WorkExperience() {
  return (
    <div className={styles.work_experience}>
      <div className={styles.job_container}>
        <img className={styles.company_logo} src='/fusawareLogo.png' />
        <div className={styles.position_info}>
          <div className={styles.position_title_container}>
            <h2><u>Software Engineer</u></h2>
            <p className={styles.position_date}>November 2023 - Present</p>
          </div>
          <ul className={styles.position_description}>
            <li>Write clean code in Typescript, Node.js, and React</li>
            <li>Manage an evolving relational database (PostgreSQL and SQLite)</li>
            <li>Effectively practice extreme programming, Agile, and test-driven development principles</li>
            <li>Improve code quality by working with others through pair programming and code reviews</li>
            <li>Utilize AWS to store data and manage app releases</li>
          </ul>
        </div>
      </div>
    </div>
  )
}