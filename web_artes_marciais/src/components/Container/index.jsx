import styles from './Container.module.css'

function Container({ children }) { /* props que indica elemento filho de componente */
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container