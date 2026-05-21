import { Injectable } from '@angular/core';


// This service handles - 
// login
// register
// logout
// current user
// token storage
// auth state

// User submits form
//     ↓
// Angular calls / login
//     ↓
// Laravel returns token + user
//     ↓
// Store token
//     ↓
// Update auth state
//     ↓
// Redirect dashboard

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
}
