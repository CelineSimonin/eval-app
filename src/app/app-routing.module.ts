import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {EvalComponent} from "./eval/eval.component";

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: EvalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
