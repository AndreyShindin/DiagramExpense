import { useAppSelector } from "../../App";
import Diagram from "../Diagram/Diagram";
const ExpenseDiagram = (props: any) => {
    const dataExpense = useAppSelector(state => state.expense.data);
    const dataDiagram = [
            {id: 1, value: 0, label: 'янв' ,},
            {id: 2, value: 0, label: 'фер' ,},
            {id: 3, value: 0, label: 'мар' ,},
            {id: 4, value: 0, label: 'апр' ,},
            {id: 5, value: 0, label: 'май' ,},
            {id: 6, value: 0, label: 'июн' ,},
            {id: 7, value: 0, label: 'июл' ,},
            {id: 8, value: 0, label: 'авг' ,},
            {id: 9, value: 0, label: 'сен' ,},
            {id: 10, value: 0, label: 'окт' ,},
            {id: 11, value: 0, label: 'ноя' ,},
            {id: 12, value: 0, label: 'дек' ,},
    ]
    for(let key of props.filterData){
        let monthNow = +key.date.split('-')[1];
        dataDiagram[monthNow-1].value += key.amount 
    }  
    return(
        <div>
          <Diagram monthData={dataDiagram}/>
        </div>
    )
}

export default ExpenseDiagram