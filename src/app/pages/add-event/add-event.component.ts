import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { event } from 'src/app/core/interfaces/event.interface';
import { EventsService } from 'src/app/core/services/events.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{

  formData:event={
    name: '',
    description: '',
    skills: '',
    startdate: '',
    enddate:'',
    numOfTechnologists: null,
    attachment: '',
  };

  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _eventsService: EventsService,
    private location:Location){
    this.formGroup = this.formBuilder.group({
      name: [null,[Validators.required]],
      description: [null,[Validators.required]],
      skills: [null,[Validators.required]],
      startdate: [null,[Validators.required]],
      enddate:[null,[Validators.required]],
      numOfTechnologists: [null,[Validators.required]],
      attachment: [null,[Validators.required]],
    })
  }

  ngOnInit(): void{

  }
  getErrorMessage(control: any){
    if(control.hasError('required')){
      return 'you must enter a value';
    }
    return '';
  }

  onAddClicked(){
    if(this.formGroup.invalid){
      this.validateFormGroup();
    }else{
      this.createEvent();
    }
  }

  createEvent(){
    this._eventsService.create({
      name: this.formGroup.controls['name'].value,
      description: this.formGroup.controls['description'].value,
      skills: this.formGroup.controls['skills'].value,
      startdate: this.formGroup.controls['startdate'].value,
      enddate:this.formGroup.controls['enddate'].value,
      numOfTechnologists: this.formGroup.controls['numOfTechnologists'].value,
      attachment: this.formGroup.controls['attachment'].value,
    }).then(()=>{
      window.alert('added sucsesfull');
    });
  }

  validateFormGroup(){
    Object.keys(this.formGroup.controls).forEach((filed)=>{
      const control = this.formGroup.get(filed);
      control?.markAsTouched({onlySelf: true})
    })
  }

  onCancelClicked(){
    this.location.back()
  }

}
