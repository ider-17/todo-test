import styles from './tabs.module.css'
import Tab from '../tab';

const Tabs = () => {
    const TABS = ['All', 'Active', 'Completed'];
    return (
        <div className={styles.tabsContainer}>
            {TABS.map((tab) => {
                return (
                    <Tab key={tab} option={tab} />
                )
            })}
        </div>
    )
}

export default Tabs