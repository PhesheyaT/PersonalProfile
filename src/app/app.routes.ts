import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillAndExperienceComponent } from './pages/skill-and-experience/skill-and-experience.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

export const routes: Routes = [
  {path: '', component:AboutMeComponent},
  {path: 'about-me', component:AboutMeComponent},
  {path: 'skills-and-experience', component:SkillAndExperienceComponent},
  {path: 'certifications', component:CertificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
