import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private _authService: AuthService) {}

  ngOnInit(): void {}

  onloginClicked() {
    this._authService.login();
    this.router.navigate(['/home']);
  }
}
