function addTask(tasks, task){
    tasks.push(task);
    console.log(`\n ("${task}" has been added to the list!)`);
}

function listTasks(tasks) {
    console.log("\nCURRENT TASKS");
    tasks.forEach(task => console.log(task));
}

module.exports = {
    addTask: addTask,
    listTasks,
}