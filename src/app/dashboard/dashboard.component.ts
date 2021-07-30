import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

interface Movies {
  Title: String;
  Year: number;
  Tickets_Available: number;
  Screen: String;

}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardService) {}
  heros: Movies[] = [];

  ngOnInit(): void {
    this.loadMovieDetails();
  }

  loadMovieDetails() {
    this.service.getMovies().subscribe((data: any)=>{
      this.heros = data?.body;
    });
  }

}
