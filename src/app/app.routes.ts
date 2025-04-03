import { Routes } from '@angular/router';
import {FormComponent} from "./components/form/form.component";
import {ApiComponent} from "./components/api/api.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'api', component: ApiComponent },
  {path: 'form', component: FormComponent },
];
