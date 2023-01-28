import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersFilter } from 'src/app/core/interfaces/filter.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit{
  dataSource= new MatTableDataSource<IUser>([])

  displayedColumns :string[]=['name','email','phone','type','logo','website']
  type:string[]=['NGO','Goverment','Religious']
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
    this.usersFilters.push({name:'type',options:this.type,defaultValue:this.defaultValue});


  }

getAllData(){
 this._authservice.getAllNgoUsers().subscribe((result)=>{
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
