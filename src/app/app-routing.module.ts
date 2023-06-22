import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'edit-User/:id', component: EditUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
