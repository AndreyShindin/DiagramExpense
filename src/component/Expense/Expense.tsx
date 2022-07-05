import styles from './Expense.module.scss';
const Expense = (props: any) => {
    return(
        <li className={styles.item}>
            <div className={styles.content}>
              <div className={styles.date}><span className={styles.name}>Дата:</span> {props.date}</div>
              <div className={styles.title}><span className={styles.name}>Название:</span> {props.title}</div>
              <div className={styles.amount}><span className={styles.name}>Средства:</span> ${props.amount}</div>
            </div>
          </li>
    )
}

export default Expense