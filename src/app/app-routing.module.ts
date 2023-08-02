import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './PlatfRecrutement/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

  {path:'', redirectTo: '/', pathMatch: 'full'},
  {path:'cv', component:CvComponent},
  {path:'color', component: ColorComponent},
  /*{path:'navbar', component: HeaderComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
