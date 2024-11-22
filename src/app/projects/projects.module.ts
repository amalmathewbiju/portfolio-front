import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProjectsRoutingModule,ProjectsComponent
  ]
})
export class ProjectsModule { }