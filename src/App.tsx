import { useState } from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import styles from './App.module.css';
import Diagram from './component/Diagram/Diagram';
import Expense from './component/Expense/Expense';
import ExpenseCreator from './component/Expense/ExpenseCreator';
import ExpenseDiagram from './component/Expense/ExpenseDiagram';
import ExpenseFilter from './component/Expense/ExpenseFilter';
import { RootState } from './store/store';
const App = () => {
  const [newExpense, addNewExpense] = useState(false);
  const data =useAppSelector(state => state.expense.data)
  const year =useAppSelector(state => state.expense.choiceYear)
  
  const filterData = data.filter((dataItem) => { 
    return dataItem.date.split('-')[0] === year
  })
  
  const cancelCreate = () => {
    addNewExpense(false)
  }

  return(
    <div className={styles.app}>
      
      {!newExpense && <div className={styles.creat}><button className={styles.add} onClick={() => addNewExpense(true)}>Добавить новую запись</button></div>}
      {newExpense && <ExpenseCreator cancelCreate={cancelCreate}/>}
      <ExpenseDiagram filterData={filterData}/>
      <ExpenseFilter />
      <div className={styles.expense}>
        <ul className={styles.list}>
            {filterData.length === 0 && <p>Нет данных</p>}
            {filterData.length > 0 && filterData.map((dataItem: any) => {
              return <Expense key={dataItem.id} date={dataItem.date} title={dataItem.title} amount={dataItem.amount}/>
            })}
          </ul>
      </div>
    </div>
  )
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default App