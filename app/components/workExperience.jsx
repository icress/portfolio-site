import styles from './work.module.css'

export default function WorkExperience() {
  return (
    <div className={styles.work_experience}>
      <div className={styles.job_container}>
        <img className={styles.company_logo} src='/fusawareLogo.png' />
        <div className={styles.position_info}>
          <div className={styles.position_title_container}>
            <h2><u>Software Engineer</u></h2>
            <p className={styles.position_date}>November 2023 - March 2026</p>
          </div>
          <ul className={styles.position_description}>
            <li>Developed and maintained production features using TypeScript, Node.js, Python, Express.js, and React.</li>
            <li>Actively migrated and managed evolving relational databases in PostgreSQL and SQLite.</li>
            <li>Built a Rails-inspired MVC system in TypeScript to enforce separation of concerns and improve maintainability.</li>
            <li>Utilized S3 and EKS inside of AWS to store data, deploy containerized services, and manage production releases.</li>
            <li>Practiced test-driven development by creating unit and integration tests to maintain over 90% code coverage.</li>
            <li>Implemented logging, error handling strategies, and developer tools to debug issues and catch failures.</li>
            <li>Utilized Git and GitHub to manage version control and CI/CD pipelines.</li>
            <li>Improved code quality by working with others through pair programming and code reviews.</li>
            <li>Contributed significantly in daily technical standup meetings and biweekly Agile sprint planning meetings.</li>
            <li>Operated independently to complete high-impact projects for the company.</li>
            <li>Made important architectural decisions that have positive, long-reaching impacts on the codebase.</li>
            <li>Refactored legacy code to simplify system design, reduce bug frequency, and improve long-term maintainability.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}