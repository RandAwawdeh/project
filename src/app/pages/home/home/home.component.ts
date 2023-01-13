import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/core/interfaces/service.interface'
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router: Router) {}

  services: Service[] = [{
    title:'Autocomplete',
    subtitle:'NGO',
    description:'a small text here',
    date: '22/2/2022',
  },
  {
    title:'Autocomplete',
    subtitle:'NGO',
    description:'a small text here',
    date: '22/2/2022',
  },
  {
    title:'Autocomplete',
    subtitle:'NGO',
    description:'a small text here',
    date: '22/2/2022',
  },

]


  ngOnInit(): void{

  }
  onLoggedinClicked(){
    this.router.navigate(['/auth/login']);
  }
  onSignupClicked(){
    this.router.navigate(['/auth/signup']);
  }
}
