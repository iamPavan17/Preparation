function Task(task, isCompleted) {
    this.title = task;
    this.createdAt = new Date();
    this.isCompleted = isCompleted;
    
    this.details = function() {
        return `${this.title} - ${this.createdAt} - ${this.isCompleted}`
    };
    this.markAsComplete = function() {
        this.isCompleted = true;
        return `The task ${this.title} has been marked as complete.`;
    };
    this.markAsInComplete = function() {
        this.isCompleted = false;
        return `The task ${this.title} has been marked as incomplete.`;
    };
};

var t1 = new Task('go for a walk', false);
var t2 = new Task('water plants', true);
var t3 = new Task('get milk', false);
// console.log(t1.details());

// console.log(t1.markAsComplete());

// console.log(t1.details());

// console.log(t1.markAsInComplete());

var tasks = [];
tasks.push(t1, t2, t3);

function tasksCompeleted(tasks) {
    var incompleteTask = tasks.filter(task => {
        return !task.isCompleted;
    });

    var completedTask = tasks.filter(task => {
        return task.isCompleted;
    });

    var incompleteTaskArr = [];
    var completedTaskArr = [];

    incompleteTask.forEach(task => {
        incompleteTaskArr.push(task.title);
    });

    completedTask.forEach(task => {
        completedTaskArr.push(task.title);
    });

    return [incompleteTaskArr,completedTaskArr];
}

console.log(tasksCompeleted(tasks))