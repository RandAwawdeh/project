import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { event } from 'src/app/core/interfaces/event.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventsService } from 'src/app/core/services/events.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit{
  dataSource= new MatTableDataSource<event>([])
  eventData:any;

  displayedColumns :string[]=['name','skills','startdate','enddate','purpose','volunteerIn','actions']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _authservice:AuthService,
    private _eventservice:EventsService){

  }

  ngOnInit(): void {
    this.getAllRequest()
  }
  getAllRequest(){
    this._eventservice.getAllEvents().subscribe((result)=>{
      console.log(result)
      this.dataSource = new MatTableDataSource(result)
      this.dataSource.paginator=this.paginator;
      this.dataSource._updateChangeSubscription()
    })
  }
  onApproveClicked(row:event){
    this._eventservice.approvedRequest(row).then(()=>{
      this._eventservice.deleteRequest(row.key)
    })
  }
  onDeleteClicked(row:event){
    this._eventservice.deleteRequest(row.key).then(()=>{})

  }
}
