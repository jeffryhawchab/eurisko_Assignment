var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.currentId = 1;
    }
    // Add a new task
    TaskManager.prototype.addTask = function (name) {
        if (typeof name !== "string") {
            console.error("Task name must be a string.");
            return;
        }
        var newTask = {
            id: this.currentId,
            name: name,
            status: "Pending",
        };
        this.tasks.push(newTask);
        this.currentId++;
    };
    TaskManager.prototype.completeTask = function (id) {
        if (typeof id !== "number") {
            console.error("Task ID must be a number.");
            return;
        }
        // Find the task by ID
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (task) {
            task.status = "Completed";
        }
        else {
            console.error("Task with ID ".concat(id, " not found."));
        }
    };
    TaskManager.prototype.displayTasks = function () {
        if (this.tasks.length === 0) {
            console.log("No tasks found.");
            return;
        }
        this.tasks.forEach(function (task) {
            console.log("Task ID: ".concat(task.id, ", Name: \"").concat(task.name, "\", Status: ").concat(task.status));
        });
    };
    return TaskManager;
}());
// Example usage
var taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Build a project");
taskManager.completeTask(1);
taskManager.displayTasks();
