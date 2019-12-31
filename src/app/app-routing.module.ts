import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {path:'',redirectTo:"data",pathMatch:"full"},
  {path:"data",component:DetailsComponent},
  {path:"data/form",component:StudentFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
