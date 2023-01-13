import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersFilter } from 'src/app/core/interfaces/filter.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-technicals-list',
  templateUrl: './technicals-list.component.html',
  styleUrls: ['./technicals-list.component.css']
})
export class TechnicalsListComponent implements OnInit{
  dataSource= new MatTableDataSource<IUser>([])

  displayedColumns :string[]=['name','email','phone','city','skills','jobDesc','courses','availableTime']
  city:string[]=['All','Amman','Zarqa','Irbid','Aqaba','Mafraq','Madaba','As-Salt','Jerash','Maan','Karak','Tafilah','Fuheis','Ajloun']
skills:string[]=['Teamwork','Relationship building','Confidence','Customer service','Sales','Problem solving','Training','IT tools','Leadership']
defaultValue = "All";
filterDictionary= new Map<string,string>()
usersFilters: UsersFilter[]=[];
dataSourceFilters = new MatTableDataSource<IUser>([])


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _authservice:AuthService){

  }

  ngOnInit() :void{

    this.getAllData()
    this.dataSource.sort = this.sort;

    this.usersFilters.push({name:'city',options:this.city,defaultValue:this.defaultValue});
    this.usersFilters.push({name:'skills',options:this.skills,defaultValue:this.defaultValue});


  }

getAllData(){
 this._authservice.getAllTechnialsUsers().subscribe((result)=>{
 console.log(result)
  this.dataSource= new MatTableDataSource(result);
  this.dataSource.paginator=this.paginator;
  this.dataSource.filterPredicate = function (record,filter) {
    debugger;
    var map = new Map(JSON.parse(filter));
    let isMatch = false;
    for(let [key,value] of map){
      isMatch = (value === "All") || (record[key as keyof IUser] === value);
      if(!isMatch) return false;
    }
    return isMatch;
  }
  this.dataSource._updateChangeSubscription()

})
  }



  applyUserFilter(ob:MatSelectChange,usersfilter:UsersFilter) {

    this.filterDictionary.set(usersfilter.name,ob.value);


    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));

    this.dataSource.filter = jsonString;
    console.log(this.dataSource.filter);
  }

}
