class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = []; 
    private currentId: number = 1; 

    // Add a new task
    addTask(name: string): void {
        if (typeof name !== "string") {
            console.error("Task name must be a string.");
            return;
        }

       
        const newTask = {
            id: this.currentId,
            name: name,
            status: "Pending", 
        };

        this.tasks.push(newTask); 
        this.currentId++; 
    }
    completeTask(id: number): void {
        if (typeof id !== "number") {
            console.error("Task ID must be a number.");
            return;
        }

        // Find the task by ID
        const task = this.tasks.find((task) => task.id === id);

        if (task) {
            task.status = "Completed"; 
        } else {
            console.error(`Task with ID ${id} not found.`);
        }
    }

    displayTasks(): void {
        if (this.tasks.length === 0) {
            console.log("No tasks found.");
            return;
        }

        this.tasks.forEach((task) => {
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
        });
    }
}

// Example usage
const taskManager = new TaskManager();

taskManager.addTask("Learn TypeScript"); 
taskManager.addTask("Build a project"); 

taskManager.completeTask(1);

taskManager.displayTasks();
