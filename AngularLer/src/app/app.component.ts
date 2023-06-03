import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'AngularLer';
 

  userDetails = new FormGroup({

    name: new FormControl('' , [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    age: new FormControl('')

  })
  
  getDetails(){
    console.log(this.userDetails.value);
    
  }

  get name(){

    return this.userDetails.get('name')
  }

  get password(){

    return this.userDetails.get('password')
  }

  get email(){

    return this.userDetails.get('email')
  }
}
