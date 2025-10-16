import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Politics } from './politics/politics';
import { Technology } from './technology/technology';
import { Sports } from './sports/sports';
import { Business } from './business/business';
import { World } from './world/world';
import { Health } from './health/health';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'politics',component:Politics},
    {path:'technology',component:Technology},
    {path:'sports',component:Sports},
    {path:'business',component:Business},
    {path:'health',component:Health},
    {path:'world',component:World}
];
