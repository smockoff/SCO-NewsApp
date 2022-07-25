import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { SportComponent } from './sport/sport.component';


const routes: Routes = [
  {path:'', component:TopHeadlineComponent},
  {path:'home', component:TopHeadlineComponent},
  {path:'tech', component:TechComponent},
  {path:'health', component:HealthComponent},
  {path:'sport', component:SportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
