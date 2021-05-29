import React, { useState, useEffect } from 'react';
import { Alert } from "react-bootstrap";
import styled from 'styled-components';
import axios from 'axios';

const PageTitleStyle = styled.div`
    position: absolute;
    width: 75%;
    top: 175px;
    bottom: 0;
`;

const TaskListStyle = styled.div`
    position: absolute;
    width: 75%;
    top: 250px;
    bottom: 0;
    overflow: auto;
`;

function NoTasksMessage() {
    return <p>No tasks available! Please connect to Tasks API and come back again...</p>;
}

const Tasks = () => {

    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:3008/api/tasks'
        );

        setTasks(response.data);
    };

    return (
            <div>
            < PageTitleStyle >
                <h3>Task List</h3>
                <hr></hr>
            </PageTitleStyle>
            < TaskListStyle >
            {(tasks === null) ? <NoTasksMessage/> : "" }
                {tasks &&
                    tasks.map((task) => {
                        return (
                            <Alert variant={(task.completed === true) ? "success" : "secondary"}>
                                The task named '{task.text}' (id = {task.id}) was created and is {(task.completed === true) ? " completed." : " not yet completed."}
                            </Alert>
                        );
                    })}
            </TaskListStyle>
            </div>
    );
};

export default Tasks;