import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { SportFilterService } from '../../services/sport-filter.service';

@Component({
  selector: 'app-breaks',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './breaks.component.html',
  styleUrl: './breaks.component.css'
})
export class BreaksComponent {
  selectedSport: string = 'All'; // Default to 'All'

  constructor(private sportFilterService: SportFilterService) {}

  ngOnInit(): void {
    // Subscribe to changes in the selected sport
    this.sportFilterService.selectedSport$.subscribe(sport => {
      if(this.selectedSport === null){
        this.selectedSport = 'All'
      }else{
        this.selectedSport = sport;
      }
      
      this.applyFilter(this.selectedSport);
      console.log(`Current sport: ${this.selectedSport}`);
    });
  }

  applyFilter(sport: string): void {
    this.selectedSport = sport;
    console.log(`Filtering by sport: ${sport}`);
  }
  
  cards = [
    { id: 1, name: 'Box 1', brand: 'Panini', sport: 'Basketball', description: '2023-24 Mosaic Hobby Box Break (Random Team)', price:'$10', img: '23-24_mosaic_basketball.png' },
    { id: 2, name: 'Box 2', brand: 'Panini', sport: 'Basketball', description: '2021-22 National Treasures Hobby Box Break (Random Team)', price:'$70', img: '21-22_nt_basketball.png' },
    { id: 3, name: 'Box 3', brand: 'Panini', sport: 'Basketball', description: '2022-23 Prizm Hobby Box Break (Random Team)', price:'$35', img: '22-23_Prizm_basketball.png' },
    { id: 4, name: 'Box 4', brand: 'Topps', sport: 'Soccer', description: '2023 Topps Chrome UEFA Hobby Box Break (Random Team)', price:'$7', img: '2023_chrome_soccer.jpg' },
    { id: 5, name: 'Box 5', brand: 'Topps', sport: 'Soccer', description: '2023 Topps Merlin UEFA Hobby Box Break (Random Team)', price:'$7', img: '2023_merlin_soccer.jpg' },
    { id: 6, name: 'Box 6', brand: 'Panini', sport: 'Soccer', description: '2024 Select FIFA Hobby Box Break (Random Team)', price:'$9', img: '2024_select_soccer.png' },
    { id: 7, name: 'Box 7', brand: 'Topps', sport: 'Football', description: '2023 Topps Composite Football Hobby Box Break (Random Team)', price:'$12', img: '2023_composite_fb.png' },
    { id: 8, name: 'Box 8', brand: 'Panini', sport: 'Football', description: '2023 Immaculate Football Hobby Box Break (Random Team)', price:'$50', img: '2023_immaculate_fb.png' },
    { id: 9, name: 'Box 9', brand: 'Panini', sport: 'Football', description: '2023 Optic Football Hobby Box Break (Random Team)', price:'$25', img: '2023_Optic_fb.png' },
    { id: 10, name: 'Box 10', brand: 'Topps', sport: 'Baseball', description: '2023 Topps Dynasty Hobby Box Break (Random Team)', price:'$50', img: '2023_dynasty_baseball.jpg' },
    { id: 11, name: 'Box 11', brand: 'Topps', sport: 'Baseball', description: 'Topps Stadium Club Hobby Box Break (Random Team)', price:'$9', img: '2023_stadiumclub_baseball.png' },
    { id: 12, name: 'Box 12', brand: 'Topps', sport: 'Baseball', description: '2024 Topps Chrome Baseball Series 1 Hobby Box Break (Random Team)', price:'$9', img: '2024_chrome_baseball.png' },
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
}

