const tm = require('./taskManager');
const {saveTasks, loadTasks} = require('./fileHandler');
const path = require('path');

//build file path
const filepath = path.join(__dirname, 'tasks.json');
console.log(filepath);

//Load tasks from tasks.json
let allTasksArray = loadTasks(filepath);
console.log(allTasksArray);

//Add new tasks to the list(JS array)
tm.addTask(allTasksArray, "put in vacation request");
tm.addTask(allTasksArray, "buy plane ticket");
tm.addTask(allTasksArray, "pack suitcases");

//List the tasks
tm.listTasks(allTasksArray);

//Save
saveTasks(filepath,allTasksArray);