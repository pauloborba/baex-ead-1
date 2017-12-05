import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ModeratorComponent } from './moderator.component';
import { CourseComponent } from './course.component';

import { CourseService } from './course.service';


const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent, pathMatch: 'full', data: { title: 'BAEX-EAD' } },
  { path: 'moderador', component: ModeratorComponent, pathMatch: 'full', data: { title: 'Moderador' } },
	{ path: 'cursos', component: CourseComponent, pathMatch: 'full', data: { title: 'Cadastro de Curso' } },
  	{ path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'BAEX-EAD' } },
  	{ path: '*', component: HomeComponent, pathMatch: 'full', data: { title: 'BAEX-EAD' } },
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HomeComponent,
    ModeratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
