import React from 'react';
import styled from 'styled-components';
import Tasks from './TaskList';

const TasksPageStyle = styled.div`
    margin-left: 275px;
    margin-top: 25px;
`;

const TasksPage = () => (
    <TasksPageStyle>
        <Tasks />
    </TasksPageStyle>
)

export default TasksPage;