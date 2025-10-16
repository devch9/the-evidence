import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Politics } from './politics/politics';
import { Technology } from './technology/technology';
import { Sports } from './sports/sports';
import { Business } from './business/business';
import { Health } from './health/health';
import { World } from './world/world';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink,Home,Politics,Technology,Sports,Business,Health,World],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('the-evidence');
}
