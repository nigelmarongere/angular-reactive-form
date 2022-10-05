import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';
  reactiveForm: FormGroup;

  attendees = new Array();

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      fullname: new FormControl(null),
      company: new FormControl(null),
      email: new FormControl(null),
      region: new FormControl(null),
      role: new FormControl(null)
    });
  }

  onSubmit(){
    this.attendees.push(this.reactiveForm.value);
    console.log(this.attendees);
  }
}
