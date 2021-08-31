// create method to complete task
// define get task toDO method
// use filter to return just the incompleted task (arrow function)
// Test Your work by running the script

const tasks = {
	tasks:[{
		text:'Glocery shooping',
		completed:true
	},{
		text:'Clean Yard',
		completed:false
	},{
		text:'Film Course',
		completed:false
	}],
	getTasksToDo(){
		// console.log('getting list for tasks');

		return this.tasks.filter((task)=>{
			return task.completed === false 
		})
	// return taskk
	}
}
console.log(tasks.getTasksToDo());
