import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChatAssistantComponent } from '../chat-assistant/chat-assistant.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterLink,ChatAssistantComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  routes = ['/home', '/about', '/projects', '/contacts'];
  
  constructor(private router: Router) {}

  get isFirstPage(): boolean {
    return this.router.url === this.routes[0];
  }

  goToPrevious() {
    const currentIndex = this.routes.indexOf(this.router.url);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    this.router.navigate([this.routes[previousIndex]]);
  }

  goToNext() {
    const currentIndex = this.routes.indexOf(this.router.url);
    const nextIndex = (currentIndex + 1) % this.routes.length;
    this.router.navigate([this.routes[nextIndex]]);
  }
}