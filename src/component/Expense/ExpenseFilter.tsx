import { useDispatch, useSelector } from 'react-redux';
import styles from './ExpenseFilter.module.scss';
import { choicesYear } from '../../store/createExpenseReducer'; 
import { useAppSelector } from '../../App';
const ExpenseFilter = () => {
    const year = useAppSelector(state => state.expense.choiceYear)
    const dispatch = useDispatch();
    return(
        <div className={styles.filter}>
            <label className={styles.label} htmlFor="">По годам</label>
            <select className={styles.select} value={year} onChange={(event) => dispatch(choicesYear(event.target.value))}>
                <option className={styles.option} value="2022">2022</option>
                <option className={styles.option} value="2021">2021</option>
                <option className={styles.option} value="2020">2020</option>
                <option className={styles.option} value="2019">2019</option>
                <option className={styles.option} value="2018">2018</option>
            </select>
        </div>
    )
}

export default ExpenseFilter