import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventsService } from 'src/app/core/services/events.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit{
  formGroup!:FormGroup
  userdata:any;

  constructor(
    private form: FormBuilder,
    private _eventService: EventsService,
    private _authService: AuthService,
    private location: Location
  ){

  }
  ngOnInit(): void {
    this._authService.userInfo.subscribe((result)=>{
      if(result){
        this.userdata=result
      }
    });
    this.formGroup=this.form.group({
      name:'',
      skills:'',
      startdate:'',
      enddate:'',
      volunteerIn:'',
      purpose:'',
    })
  }
  onRequestClicked(){
    this.getUserData()
    this.requestEvent()
  }
  getUserData(){
    this._authService.userInfo.subscribe((user)=>{
      if(user){
        this.userdata=user;
        console.log(this.userdata)
      }
    })
  }
  requestEvent(){
    this._eventService.requestCreate({
      name:this.formGroup.controls['name'].value,
      skills:this.formGroup.controls['skills'].value,
      startdate:this.formGroup.controls['startdate'].value,
      enddate:this.formGroup.controls['enddate'].value,
      volunteerIn:this.formGroup.controls['volunteerIn'].value,
      purpose:this.formGroup.controls['purpose'].value,
      UID:this.userdata.UID,
    })
    .then(()=>{
      this.location.back();
    })
  }
}
