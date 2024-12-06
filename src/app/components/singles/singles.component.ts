import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { SportFilterService } from '../../services/sport-filter.service';
import { CartService } from '../../services/cart.service';
import { OnInit } from '@angular/core';
import { Product } from '../../services/cart.service';

@Component({
  selector: 'app-singles',
  template: ` <button (click)="addToCart(card)">Add to Cart</button> `,
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CommonModule],
  templateUrl: './singles.component.html',
  styleUrl: './singles.component.css'
})
export class SinglesComponent implements OnInit {
  selectedSport: string = 'All'; // Default to 'All'
  //product = { id: 1, name: 'Card 1', player: 'Christian Braun', sport: 'Basketball', description: 'SGC 10 Select Orange /65', price:'$40', img: 'IMG_0327.jpg' }

  constructor(
    private sportFilterService: SportFilterService,
    private cartService: CartService
  ) {}
  
  ngOnInit(): void {
    // Subscribe to changes in the selected sport
    this.sportFilterService.selectedSport$.subscribe(sport => {
      if(this.selectedSport === null){
        this.selectedSport = 'All'
      }else{
        this.selectedSport = sport;
      }
      
      this.applyFilter(this.selectedSport);
    });
  }

  applyFilter(sport: string): void {
    this.selectedSport = sport;
  }


  /* selectedSport: string = ''; // Stores the selected sport */
  cards = [
    { id: 1, name: "Card 1", player: "Christian Braun", sport: "Basketball", description: "SGC 10 Select Orange /65", price:40, img: "IMG_0327.jpg" },
    { id: 2, name: "Card 2", player: "Jerry Jeudy", sport: "Football", description: "PSA 10 Mosaic Purple No Huddle Purple /50", price:40, img: "IMG_0325.jpg" },
    { id: 3, name: "Card 3", player: "Erling Haaland", sport: "Soccer", description: "PSA 10 Topps Chrome Silver Mini Diamonds /199", price:60, img: "IMG_0092.jpg" },
    { id: 4, name: "Card 4", player: "Erling Haaland", sport: "Soccer", description: "PSA 10 Topps Finest Purple /299", price:50, img: "IMG_0093.jpg" },
    { id: 5, name: "Card 5", player: "Ja Morant", sport: "Basketball", description: "Prizm Pink Cracked Ice", price:80, img: "IMG_3753.jpg" },
    { id: 6, name: "Card 6", player: "Lamar Jackson", sport: "Football", description: "Prestige Heroes Red /299", price:25, img: "IMG_0321.jpg" },
    { id: 7, name: "Card 7", player: "Brandon Miller", sport: "Basketball", description: "PSA 8 Select Premier Level Blue", price:5, img: "IMG_0323.jpg" },
    { id: 8, name: "Card 8", player: "Jamie Jaquez", sport: "Basketball", description: "PSA 10 Obsidian Electric Etch Orange Flood /99", price:50, img: "IMG_0329.jpg" },
    { id: 9, name: "Card 9", player: "Luka Doncic", sport: "Basketball", description: "SGC 10 NBA Hoops Presentations", price:100, img: "IMG_3669.PNG" },
    { id: 10, name: "Card 10", player: "Steph Curry", sport: "Basketball", description: "SGC 9.5 Optic Holo Lights Out", price:20, img: "IMG_3670.PNG" },
    { id: 11, name: "Card 11", player: "LeBron James", sport: "Basketball", description: "SGC 9 Optic Holo Lights Out", price:10, img: "IMG_3671.PNG" },
    { id: 12, name: "Card 12", player: "Charles Barkley", sport: "Basketball", description: "SGC 10 | Auto 10 Mosaic Scripts Charles Barkley", price:150, img: "IMG_3673.PNG" },
  ];

  get filteredCards() {
    if (this.selectedSport === 'All') {
      return this.cards; // Show all cards if no sport is selected
    }
    else if(!this.selectedSport){
      return this.cards;
    }
    return this.cards.filter(card => card.sport === this.selectedSport);
  }

  filterBySport(sport: string): void {
    this.selectedSport = sport;
  }


  addToCart(product: Product): void {
    console.log("Added to cart");
    this.cartService.addToCart(product);
  }
}
