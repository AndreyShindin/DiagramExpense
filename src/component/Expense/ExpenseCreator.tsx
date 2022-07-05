import styles from './ExpenseCreator.module.scss';
import { changeDate, changeTitle, changeAmount, createExpense } from '../../store/createExpenseReducer';
import { useDispatch } from 'react-redux';

const ExpenseCreator = (props: any) => {
    const dispatch = useDispatch()
    return(
        <div className={styles.create}>
            <input className={styles.input} type="date" min="2015-01-01" max="2022-12-01" onChange={(event) => dispatch(changeDate(event.target.value))}/>
            <input className={styles.input} type="titel" onChange={(event) => dispatch(changeTitle(event.target.value))}/>
            <input className={styles.input} type="number" onChange={(event) => dispatch(changeAmount(event.target.value))}/>
            <div className={styles['container-add']}>
                <button className={styles.add} onClick={() => dispatch(createExpense())}>Добавить</button>
                <button className={styles['cancel-create']} onClick={props.cancelCreate}>Отмена</button>
            </div>
        </div>
    )
}

export default ExpenseCreator