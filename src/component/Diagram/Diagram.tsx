import styles from './Diagram.module.scss';
import DiagramItem from './DiagramItem';
const Diagram = (props: any) => {
  const months = props.monthData
  const monthsValue = months.map((month: any) => month.value)
  const maxValue = Math.max(...monthsValue);
  return(
        <div className={styles.diagram}>
          <ul className={styles.list}>
            {months.map((month: any) => {
              return <DiagramItem 
              key={month.id}
              value={month.value}
              maxValue={maxValue}
              label={month.label}
              />
            })}
          </ul>
        </div>
    )
}

export default Diagram