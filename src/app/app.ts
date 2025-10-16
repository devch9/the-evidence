import { Component, signal,ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Politics } from './politics/politics';
import { Technology } from './technology/technology';
import { Sports } from './sports/sports';
import { Business } from './business/business';
import { Health } from './health/health';
import { World } from './world/world';
import { RouterLinkActive } from '@angular/router';
import { Blog } from './blog/blog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink,Home,Politics,Technology,Sports,Business,Health,World,Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('the-evidence');
  close=document.getElementsByClassName("close")[0];
  isLogin=false;
  showSignupPassword=false;
  showSignupconfirmPassword=false;
  typeofsignupconfirmpassword="password";
  typeofsignuppassword="password";

  toggleLogin(){
    console.log("login function called");
    
    this.isLogin=!this.isLogin
    if(this.isLogin) this.switchToLogin()
  }

  toggleSignupContainer(){
    this.isLogin=!this.isLogin;
    if(this.isLogin) this.switchToSignup()
  }

  toggleCloseLogin(event: Event){
    // console.log("close button clicked");
    event.stopPropagation();
    this.isLogin=!this.isLogin
  }

  isSignupMode = false;
  showPassword = false;
  typeofpassword="password"

  @ViewChild('successMessage') successMessage!: ElementRef<HTMLDivElement>;
  @ViewChild('errorMessage') errorMessage!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    // Add focus/blur feedback for inputs
    const inputs = document.querySelectorAll<HTMLInputElement>('input');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        if (input.parentElement) input.parentElement.style.transform = 'scale(1.02)';
      });
      input.addEventListener('blur', () => {
        if (input.parentElement) input.parentElement.style.transform = 'scale(1)';
      });
    });
  }
  activeToggle = 0;

  switchToLogin(): void {
    this.isSignupMode = false;
    this.activeToggle = 0;
  }

  switchToSignup(): void {
    this.isSignupMode = true;
    this.activeToggle = 1;
  }

  togglePassword(): void {
    if(this.typeofpassword=='password'){
      this.typeofpassword='text'
    }
    else{
      this.typeofpassword='password'
    }
    this.showPassword=!this.showPassword
  }

  toggleSignupPassword(){
    this.showSignupPassword=!this.showSignupPassword
    if(this.typeofsignuppassword=='password') this.typeofsignuppassword="text"
    else this.typeofsignuppassword="password"
  }
  toggleSignupConfirmPassword(){
    console.log("signup confirm password is clicked");
    
    this.showSignupconfirmPassword=!this.showSignupconfirmPassword
    if(this.typeofsignupconfirmpassword=="password") this.typeofsignupconfirmpassword="text"
    else this.typeofsignupconfirmpassword="password"
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    return password.length >= 6;
  }

  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
