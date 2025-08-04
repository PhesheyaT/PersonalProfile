import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillAndExperienceComponent } from './skill-and-experience.component';
import { AppRoutingModule } from '../../app.routes';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [SkillAndExperienceComponent]
})
export class SkillAndExperienceModule { }
