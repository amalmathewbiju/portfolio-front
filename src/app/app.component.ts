import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './data.service';
import { TaskService } from './task.service';
import { FooterComponent } from './footer/footer.component';
import { ChatAssistantComponent } from './chat-assistant/chat-assistant.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingComponent } from './loading/loading.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChatAssistantComponent,
    CommonModule,
    FormsModule,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,LoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {
    // alert("Open in Laptop for better experience")
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  // Disable right-click
  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  // Disable inspect shortcuts
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (
      event.key === 'F12' ||
      (event.ctrlKey && event.shiftKey && ['I', 'J', 'C', 'K'].includes(event.key)) ||
      (event.ctrlKey && event.key === 'U')
    ) {
      event.preventDefault();
    }
  }
}
