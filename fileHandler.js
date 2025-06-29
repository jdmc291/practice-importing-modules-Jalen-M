const fs = require('fs');

function saveTasks(filePath, tasksArray){
    let jsonTasks = JSON.stringify(tasksArray);
    fs.writeFileSync(filePath,jsonTasks);
    console.log('\nTasks saved to file.');
}

function loadTasks(filePath){
    if (fs.existsSync(filePath)){
        const jsonData = fs.readFileSync(filePath, 'utf-8');

            let jsData = JSON.parse(jsonData);

            return jsData;

    }else{
        return [];
    }
}

module.exports = {
    saveTasks,
    loadTasks,
}