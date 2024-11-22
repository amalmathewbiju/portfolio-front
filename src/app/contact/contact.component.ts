import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ChatAssistantComponent } from '../chat-assistant/chat-assistant.component';
import { RouterLink } from '@angular/router';
import { MorecontactsComponent } from '../morecontacts/morecontacts.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ChatAssistantComponent,RouterLink,MorecontactsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contacts: any[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getContacts().subscribe(data => this.contacts = data);
  }
  redirectTo(contact: any) {
    if (contact.type === 'Email') {
      window.location.href = `mailto:${contact.value}`;
    } else if (contact.link) {
      // Check if the link has a proper URL format
      const url = contact.link.startsWith('http') ? contact.link : `https://${contact.link}`;
      window.open(url, '_blank');
    }
  }
  
  
}
