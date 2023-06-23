import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseComponent } from './pages/case/case.component';
import { DocumentComponent } from './pages/document/document.component';
import { FormsModule } from '@angular/forms';
import { CaseService } from './services/case.service';
import { HttpClientModule } from '@angular/common/http';
import { DocumentService } from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
    CaseComponent,
    DocumentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CaseService, DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
