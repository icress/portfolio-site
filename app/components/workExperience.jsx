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
            <li>Write clean code using TypeScript, Node.js, Python, and React.</li>
            <li>Actively migrate and manage evolving relational databases in PostgreSQL and SQLite.</li>
            <li>Build a Ruby on Rails-inspired MVC architecture in TypeScript to enforce separation of concerns and improve maintainability.</li>
            <li>Utilize S3 and EKS inside of AWS to store data and manage production releases.</li>
            <li>Implement logging, error handling strategies, and developer tools to debug issues and catch failures.</li>
            <li>Operate independently to complete high-impact projects for the company.</li>
            <li>Create unit and integration tests to fulfill the principles of TDD and maintain over 90% code test coverage.</li>
            <li>Improve code quality by working with others through pair programming and code reviews.</li>
            <li>Make important architectural decisions that have positive, long-reaching impacts on the codebase.</li>
            <li>Refactor legacy code to reduce bug frequency and improve maintainability.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}