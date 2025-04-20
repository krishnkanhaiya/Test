// filepath: c:\Users\krish\AngularApp\src\app\login\login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Static credentials
  private readonly validUsername = 'admin';
  private readonly validPassword = 'password123';
  constructor(private router: Router) {}

  onLogin(): void {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      localStorage.setItem('isLoggedIn', 'true'); // Set login flag
      this.router.navigate(['/matchscreen']); // Navigate to match screen
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}