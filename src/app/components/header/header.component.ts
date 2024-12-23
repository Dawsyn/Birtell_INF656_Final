import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SportFilterService } from '../../services/sport-filter.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private sportFilterService: SportFilterService,
    private router: Router,
    private cartService: CartService
  ) {}

cartItems = 0;

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items.length;
    });
  }

  navMenu = [
    { name: 'Home', url: '/', sub: [] },
    {
      name: 'Singles', url: '/singles', sub: [
        { name: 'Basketball', url: '/singles' },
        { name: 'Football', url: '/singles' },
        { name: 'Baseball', url: '/singles' },
        { name: 'Soccer', url: '/singles' }
      ]
    },
    {
      name: 'Boxes', url: '/boxes', sub: [
        { name: 'Basketball', url: '/boxes' },
        { name: 'Football', url: '/boxes' },
        { name: 'Baseball', url: '/boxes' },
        { name: 'Soccer', url: '/boxes' }
      ]
    },
    {
      name: 'Breaks', url: '/breaks', sub: [
        { name: 'Basketball', url: '/breaks' },
        { name: 'Football', url: '/breaks' },
        { name: 'Baseball', url: '/breaks' },
        { name: 'Soccer', url: '/breaks' }
      ]
    },
    { name: 'About', url: '/about', sub: [] },
    {name: 'Login', url: '/login', sub: []},
  ];

  // Filters content based on the selected sport
  filterBySport(sport: string, $event: Event, page: string): void {
    this.sportFilterService.setSport(sport);

    // Check the current route and conditionally prevent reload
    if (this.router.url === page) {
      $event.preventDefault(); // Prevent reload if already on the Singles page
    }
      if (this.router.url !== page) {
        // Navigate to Singles page if not already there
        this.router.navigate([page]).then(() => {
          $event.preventDefault();
        });
      console.log(`Selected sport: ${sport}`);
    }
  }
}