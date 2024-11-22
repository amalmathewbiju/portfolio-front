import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-morecontacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './morecontacts.component.html',
  styleUrl: './morecontacts.component.css'
})
export class MorecontactsComponent {
  mcontacts: any[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMContacts().subscribe(data => this.mcontacts = data);
  }
  redirectTo(mcontact: any) {
    if (mcontact.link) {
    
      const url = mcontact.link.startsWith('http') ? mcontact.link : `https://${mcontact.link}`;
      window.open(url, '_blank');
    } 
     
  }
  
}
