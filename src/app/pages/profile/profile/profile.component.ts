import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { single } from 'rxjs';
import { SignupComponent } from '../../auth/signup/signup.component';
import { UpdateDialogComponent } from 'src/app/core/components/update-dialog/updat-dialog/update-dialog.component';
import { IUser } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  userdata: any;
  loadding = true;

  constructor(
    private dialog: MatDialog,
    private _authService:AuthService,
    private router: Router,
  ){}
  ngOnInit(): void {
  this.getuserInfo()
  }
  getuserInfo(){
    this._authService.userInfo.subscribe((user)=>{
      if(user){
        this.userdata=user;
        this.loadding=false;
      }
    })
  }
  openDialog(userdata: IUser){
    this.router.navigate(['./update-profile'],{queryParams:{key:userdata.UID}})
    // const dialogRef = this.dialog.open(UpdateDialogComponent,
    //   {
    //   height:'500px',
    //   }
    // );
  }


}
