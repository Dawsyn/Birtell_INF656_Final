import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { BreaksComponent } from './components/breaks/breaks.component';
import { SinglesComponent } from './components/singles/singles.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    { path: 'boxes', component: BoxesComponent},
    { path: 'breaks', component: BreaksComponent},
    { path: 'singles', component: SinglesComponent},
    { path: 'about', component: AboutComponent},
    { path: 'cart', component: CartComponent},
    { path: 'admin', component: AdminComponent},
];
