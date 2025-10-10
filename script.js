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
        removeButton.className = 'remove-btn';

        // When the remove button is clicked, delete the task
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

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
        // Define the function to add a new task
function addTask() {
    // Get and trim the text from the input field
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new <li> element for the task
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // When the remove button is clicked, delete the task
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Add the remove button to the <li> element
    li.appendChild(removeBtn);

    // Add the <li> element to the task list
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = "";
}
        
    });

});
