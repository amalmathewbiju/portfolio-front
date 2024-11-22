import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,MatIconModule,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  profile: any;constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProfile().subscribe((data) => {
      this.profile = data;
    });
  }
}