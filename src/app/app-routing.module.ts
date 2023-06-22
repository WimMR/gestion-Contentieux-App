import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseComponent } from './pages/case/case.component';

export const routes: Routes = [
  {
    path:'case', component:CaseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
