import styles from './DiagramItem.module.scss';
const DiagramItem = (props: any) => {
    let maxVal = '0%';
    if (props.maxValue > 0){
        maxVal = Math.round((props.value/props.maxValue) * 100 )+ "%";
    }

    const style = {
        height: maxVal,
    }
    return(
        <li className={styles.item}>
            <div className={styles.colm}>
                <div className={styles.fill} style={style}></div>
            </div>
            <label className={styles.label} htmlFor="">{props.label}</label>
        </li>
    )
}

export default DiagramItem