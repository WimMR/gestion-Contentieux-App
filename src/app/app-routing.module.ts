import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseComponent } from './pages/case/case.component';
import { DocumentComponent } from './pages/document/document.component';
import { TacheComponent } from './pages/tache/tache.component';

export const routes: Routes = [
    {path:'case', component:CaseComponent},
    {path :'document', component:DocumentComponent},
    {path :'tache', component:TacheComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
