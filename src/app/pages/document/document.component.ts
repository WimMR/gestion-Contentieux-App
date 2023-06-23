import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';
import {Document} from '../../models/document';
import { Case } from 'src/app/models/case';
import { CaseService } from 'src/app/services/case.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit{

  documentObject: Document = new Document();

  documents!: any[];
  cases!: Case[];

  constructor(private documentService: DocumentService, private router: Router, private caseService:CaseService) { }

  ngOnInit(): void {
    this.findAllDocuments();
    this.caseService.findAll().subscribe(data=>{this.cases=data});
  }

  findAllDocuments() {
    this.documentService.findAll().subscribe(data => { this.documents = data; });
  }

  saveDocument() {
    this.documentService.save(this.documentObject).subscribe(
      () => {
        this.findAllDocuments();
        this.documentObject = new Document();
      },
    )
  }
  deleteDocument(id: number) {
    this.documentService.delete(id).subscribe(() => { this.findAllDocuments() });
  }

  editDocument(documentObject: Document) {
    localStorage.removeItem("editDocumentId");
    localStorage.setItem("editDocumentId", documentObject.idDocument.toString());
    this.router.navigate(['/editDocument', documentObject.idDocument]);

  }
}
