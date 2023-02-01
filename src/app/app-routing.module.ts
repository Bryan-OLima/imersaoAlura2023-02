//Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './modules/home/pages/home/home.component';
import { NotFoundComponent } from './modules/shared/pages/not-found/not-found.component';

const title: string = 'O Mentalista';
const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
    title:`${title}`
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: `${title} - 404`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
