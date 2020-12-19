import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './home/resume/resume.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
            {path: 'home', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'resume', component: ResumeComponent},
            {path: 'contact', component: ContactComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', redirectTo: 'home', pathMatch: 'full'}
		])
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule { };