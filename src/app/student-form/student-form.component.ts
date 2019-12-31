import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.studentForm = this.fb.group({
       fname: ['', Validators.required ],
       lname: ['', Validators.required ],
       class: ['', Validators.required ],
       year: ['', Validators.required ],
       marks: ['', Validators.required ]
    });
  }

}
