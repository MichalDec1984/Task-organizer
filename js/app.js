document.addEventListener("DOMContentLoaded", function() {
	console.log("działa");
	var addTaskButton = document.querySelector("#addTaskButton");
	console.log(addTaskButton);
	var removeFinishedTasksButton = document.querySelector("#removeFinishedTasksButton");
	console.log(removeFinishedTasksButton);
	var taskList = document.querySelector("#taskList");
	console.log(taskList);
	var taskInput = document.querySelector("#taskInput");
	console.log(taskInput);
	var panelText = document.querySelector(".panel_text");
 	addTaskButton.addEventListener("click", function() {
		if (taskInput.value.length>=5 && taskInput.value.length<500) {
			var newLi = document.createElement("li");
			var newHeader = document.createElement("p");
			var completeButton = document.createElement("button");
			var deleteButton = document.createElement("button");
			panelText.style.display = "none";
			taskList.appendChild(newLi);
			newLi.appendChild(newHeader);
			newHeader.innerText = taskInput.value;
			newLi.appendChild(completeButton);
			newLi.appendChild(deleteButton);
			completeButton.innerText = "Complete";
			completeButton.classList.add("btn");
			completeButton.classList.add("btn-default")
			deleteButton.innerText = "Delete";
			deleteButton.classList.add("btn");
			deleteButton.classList.add("btn-default");
			taskInput.value="";
			completeButton.addEventListener("click", function() {
				this.parentNode.classList.add("finished");
			});
			deleteButton.addEventListener("click", function() {
				taskList.removeChild(this.parentNode);
				if (taskList.getElementsByTagName('li').length == 0) {
	 				panelText.style.display = "initial"
	 			}		
			});
		} 	else {
				alert("The entry must have more than 5 and less than 500 characters!");
			}
 	});
	removeFinishedTasksButton.addEventListener("click", function() {
		var finishedTasks = document.querySelectorAll(".finished");
		for (var i = 0; i<finishedTasks.length; i++) {
			taskList.removeChild(finishedTasks[i]);
		}
	 	if (taskList.getElementsByTagName('li').length == 0) {
	 		panelText.style.display = "initial"
	 	}
 	});
});