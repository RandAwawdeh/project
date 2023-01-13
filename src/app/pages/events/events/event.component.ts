import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { event } from 'src/app/core/interfaces/event.interface';
import { EventsService } from 'src/app/core/services/events.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  dataSource = new MatTableDataSource();
  displayedColumns=['name','description','skills','start date', 'end date','num of technologists', 'attachment', 'actions'];

  constructor(private _eventsService: EventsService, private router: Router){}
  ngOnInit(): void {
    this.getAllData()
  }


  getAllData(){
    this._eventsService.getAll().subscribe((result:any) => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource._updateChangeSubscription();
    });

  }
  applyFilter($event: any){
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  onAddClicked(){
    this.router.navigate(['/events/add-event']);
  }
  onDeleteClicked(row: event){
    this._eventsService.delete(row.key).then(()=>{
      window.alert('deleted sucsesfull')
    });
  }

}
