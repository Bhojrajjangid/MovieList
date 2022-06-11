import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';


const routes: Routes = [
  { path: 'introduction', component: IntroductionComponent },
  { path: 'login', component: LoginComponent},
  { path: 'movies', component: MoviesListComponent},
  // { path: '**', component: IntroductionComponent}
  { path: '',   redirectTo: '/login', pathMatch: 'full' }

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
