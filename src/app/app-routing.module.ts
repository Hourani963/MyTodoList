import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeTastComponent} from "./home-tast/home-tast.component"
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path : '', redirectTo:'home',pathMatch:'full'},
  {path : 'home',component : HomeTastComponent},
  {path : '**',component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
