import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"*", component: AppComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
