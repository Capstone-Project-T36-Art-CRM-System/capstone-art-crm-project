export function getTaskList(){
    return taskList.sort((a,b) => b.id - a.id);
}

export function addTask(task){
    let newTask = { 
        ...task,
        id: taskList.length +1,
        completed: false
    }

    try {
        taskList.push(newTask)
    } catch (error) {
        console.log('Error!')
    }
}

export function update(id, task){
    let newTask = { 
        ...task,
        completed: true
    }

    try {
        taskList = taskList.map(task => {
            if (task.id === id) { return newTask }
            return task
        })
    } catch (error) {
        console.log('Error!')
    }
}


let taskList = [
    {
        "id": 1,
        "task": 'Update next week schedule',
    },
    {
        "id": 2,
        "task": 'Contact Margaret Atwood for ArtFest',
    },
    {
        "id": 3,
        "task": 'Order water',
    },
    {
        "id": 4,
        "task": 'Upload lecture video on youtube',
    },
    {
        "id": 5,
        "task": 'Order oils and watercolors',
    },
    {
        "id": 6,
        "task": 'Upload insta stories about open art classes',
    },
    {
        "id": 7,
        "task": 'Reminde Michele L. about membership extention',
    },
]