import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.removeItem('isLoggedIn'); // Clear login flag
    setTimeout(() => {
      this.router.navigate(['/login']); // Redirect to login
    }, 3000); // Redirect after 3 seconds
  }
}