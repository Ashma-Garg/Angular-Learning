import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form=new FormGroup({
    topics: new FormArray([])
  });
  removeTopic(topic:FormControl){
    let index=this.t.controls.indexOf(topic);
    // console.log(index + "ff" + topic);
    this.t.removeAt(index);
    // console.log("ashbhj");
  }
  addtopic(topic:HTMLInputElement){
    this.t.push(new FormControl(topic.value));
  }
  get t(){
    return this.form.get('topics') as FormArray;
  }
}
