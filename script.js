// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Select important DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the input value and trim whitespace

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // ✅ Added using classList.add()

        // When the remove button is clicked, delete the task
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append the remove button to the task
        li.appendChild(removeButton);

        // Append the new task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow pressing "Enter" key to add a task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
