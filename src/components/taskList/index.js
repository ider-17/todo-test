import styles from './taskList.module.css'

const TASKS = [];

const TaskList = (props) => {
    if (props.tasks.length == 0) {
        return (
            <div className={styles.taskList}>No tasks yet. Add one above!</div>
        )
    }

    console.log(props.tasks);

    return (
        <div className={styles.taskList}>
            {props.tasks.map(task => {
                return (
                    <div key={props.tasks}>{task.title}</div>
                )
            })}
        </div>
    )
}

export default TaskList