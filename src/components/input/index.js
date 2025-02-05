import { useState } from "react";
import Styles from "./index.module.css";

function Input(props) {
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => {
        setInputValue(event.target.value)

    }

    const onClick = () => {
        const newTask = {
            title: inputValue,
            isComplete: false
        }

        const newArr = [...props.tasks, newTask];

        props.setTasks(newArr)
    }
    return (
        <div className={Styles.inputContainer}>
            <input className={Styles.input} placeholder="Add a new task..." onChange={onChange} />
            <button onClick={onClick} className={Styles.button}>Add</button>
        </div>
    )
}

export default Input;