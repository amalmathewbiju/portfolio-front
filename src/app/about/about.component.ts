import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatProgressBarModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  profile: any;
  education:any;
  experience : any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProfile().subscribe((data) => {
      this.profile = data;
    });
    
    this.dataService.getExperience().subscribe((data) => {
      this.experience = data;
    });
    this.dataService.getEducation().subscribe((data)=> {
      this.education = data;

    })
  }
  
}