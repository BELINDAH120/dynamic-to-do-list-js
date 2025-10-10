// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Select important DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Helper: get tasks array from Local Storage (returns array)
    function getStoredTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    // Helper: save tasks array to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create a DOM element for a task object { id, text } and append it to the list
    function createTaskElement(task) {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.dataset.id = task.id;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Remove button event: remove from DOM and update Local Storage
        removeButton.addEventListener('click', function () {
            // Remove the li from the DOM
            taskList.removeChild(li);

            // Remove from Local Storage
            const tasks = getStoredTasks();
            const updated = tasks.filter(t => t.id !== task.id);
            saveTasks(updated);
        });

        // Append button to li and li to list
        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    /**
     * Add a task.
     * If taskTextArg is provided, use it (used when loading from storage).
     * If save === true, persist the task to Local Storage.
     */
    function addTask(taskTextArg = null, save = true, idArg = null) {
        const taskText = taskTextArg !== null ? taskTextArg : taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            // If we were called programmatically to load tasks, just return
            if (taskTextArg !== null) return;
            alert("Please enter a task!");
            return;
        }

        const taskId = idArg || Date.now().toString(); // simple unique id

        const taskObj = { id: taskId, text: taskText };

        // Create DOM element
        createTaskElement(taskObj);

        // Save to Local Storage if required
        if (save) {
            const tasks = getStoredTasks();
            tasks.push(taskObj);
            saveTasks(tasks);
        }

        // Clear the input field only when user typed the task (not when loading)
        if (taskTextArg === null) {
            taskInput.value = "";
        }
    }

    // Load tasks from Local Storage and render them
    function loadTasks() {
        const storedTasks = getStoredTasks();
        storedTasks.forEach(task => {
            // Pass save = false so addTask doesn't re-save when loading
            addTask(task.text, false, task.id);
        });
    }

    // Initialization
    loadTasks();

    // Add event listener to the Add Task button
    addButton.addEventListener('click', function () {
        addTask(); // uses input value and saves
    });

    // Allow pressing "Enter" key to add a task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
