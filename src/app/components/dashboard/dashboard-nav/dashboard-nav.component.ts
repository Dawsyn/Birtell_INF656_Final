import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.css'
})
export class DashboardNavComponent {

}
