import "./TaskViewer.css"
import TaskCard from "../task-card/TaskCard";

function TaskViewer(props) {

    function renderCards() {
        return props.taskList.map(task => (
            <TaskCard 
                id={task.id}
                status={task.status}
                name={task.name}
                dueDate={task.dueDate}
            />
        ));
    }

    return (
        <div className="task-viewer-container">
            <div className="task-list-container">
                {renderCards()}
            </div>
        </div>
    );
}

export default TaskViewer