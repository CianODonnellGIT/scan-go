import { useUser } from "@auth0/nextjs-auth0/client";
import styles from './Login.module.css'


export default function Login() {
  const { user, error, isLoading } = useUser();


  if (isLoading)
    return <div className={styles.head}>....Loading</div>

  if (error)
    return <div className={styles.head}>{error.message}</div>

  if (user) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.main}>
            <h1 className={styles.head}>Welcome</h1>
            <h3 className={styles.success}>Sign in successful</h3>
            <a className={styles.button} href="/main">Continue to Main</a>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.head}>Employee Logs</h1>
          <h3>Sign In</h3>
          <a className={styles.button} href="/api/auth/login">Login</a>
        </div>
      </div>
    </>
  )
}