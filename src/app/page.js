'use client';

import styles from "./page.module.css";
import Title from "../components/title/index.js";
import Input from "@/components/input";
import TaskContainer from "@/components/taskContainer";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className={styles.cardContainer}>
      <Title />
      <Input tasks={tasks} setTasks={setTasks} />
      <TaskContainer tasks={tasks} />
      <div className={styles.textContainer}>
        <p>Powered by</p>
        <p className={styles.pineconeText}>Pinecone academy</p>
      </div>
    </div>
  );
}
