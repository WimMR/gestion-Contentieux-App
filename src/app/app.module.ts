import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CaseComponent } from './pages/case/case.component';
import { DocumentComponent } from './pages/document/document.component';
import { CaseService } from './services/case.service';
import { HttpClientModule } from '@angular/common/http';
import { DocumentService } from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EditUserComponent,
     CaseComponent,
    DocumentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [CaseService, DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }