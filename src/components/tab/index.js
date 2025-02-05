import styles from './tab.module.css'

const Tab = (props) => {
    return (
        <button className={styles.tab}>
            {props.option}
        </button>
    )
}

export default Tab