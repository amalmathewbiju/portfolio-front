import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,MatButtonModule,MatMenuModule,MatIconModule,AboutComponent,ContactComponent,ProjectsComponent,HomeComponent,RouterOutlet,NavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isDarkTheme = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const themeClass = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    this.renderer.addClass(document.body, themeClass);
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    const themeClass = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    this.renderer.removeClass(document.body, this.isDarkTheme ? 'light-theme' : 'dark-theme');
    this.renderer.addClass(document.body, themeClass);
  }
}

