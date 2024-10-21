import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  task=[{taskName:" going to gym", isChecked:false}]
  
  constructor(){

  }
 ngOnInit(): void {

 }
   onSubmit(form: NgForm){    //template driven forms
    console.log(form);
    this.task.push({
      taskName:form.controls['task'].value,  //two way binding
      isChecked:false
    })
    form.reset()
   }

   onDelete(index:number){
     this.task.splice(index,1);
   }

   onCheck(index:number){
    console.log(this.task);
    
    this.task[index].isChecked=! this.task[index].isChecked;
   //onCheck method is designed to toggle the checked state of a task in an array based on its index, allowing users
   // to mark tasks as complete or incomplete.
  
  }
 
}





// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {
//   task = [{ taskName: "going to gym", isChecked: false }];
//   editIndex: number | null = null; // New property to track the index of the task being edited

//   constructor() {}

//   ngOnInit(): void {}

//   onSubmit(form: NgForm) {
//     if (this.editIndex !== null) {
//       // Update existing task
//       this.task[this.editIndex].taskName = form.controls['task'].value;
//       this.editIndex = null; // Reset the edit index
//     } else {
//       // Add new task
//       this.task.push({
//         taskName: form.controls['task'].value,
//         isChecked: false
//       });
//     }
//     form.reset();
//   }

//   onDelete(index: number) {
//     this.task.splice(index, 1);
//   }

//   onCheck(index: number) {
//     this.task[index].isChecked = !this.task[index].isChecked;
//   }

//   onEdit(index: number) {
//     this.editIndex = index; // Set the index of the task to be edited
//     // Populate the form with the selected task's name
//     const taskToEdit = this.task[index].taskName;
//     // Assuming you have access to the form in the HTML, you might want to use ViewChild to set the value
//     setTimeout(() => {
//       const taskInput = document.getElementById('example') as HTMLInputElement;
//       if (taskInput) {
//         taskInput.value = taskToEdit; // Set the input value to the task name
//       }
//     });
//   }
// }
