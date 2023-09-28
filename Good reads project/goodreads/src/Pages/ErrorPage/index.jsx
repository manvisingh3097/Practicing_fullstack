import styles from './style.module.css';

const ErrorPage = () => {
    return(
        <div className="container">
            <div className={styles.wrapper}>
                <h1> 404 </h1>
                <p> Oops Something Went Wrong, Please try again </p>
                </div>
        </div>
    )
}

export default ErrorPage;