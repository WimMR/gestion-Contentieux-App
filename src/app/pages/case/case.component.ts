import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../../models/case';
import { CaseService } from '../../services/case.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit{

  caseObject: Case = new Case();

  cases!: any[];

  constructor(private caseService: CaseService, private router: Router) { }

  ngOnInit(): void {
    this.findAllCases();
  }

  findAllCases() {
    this.caseService.findAll().subscribe(data => { this.cases = data; });
  }

  saveCase() {
    this.caseService.save(this.caseObject).subscribe(
      () => {
        this.findAllCases();
        this.caseObject = new Case();
      }
    )
  }
  deleteCase(id: number) {
    this.caseService.delete(id).subscribe(() => { this.findAllCases() });
  }

  editCase(caseObject: Case) {
    localStorage.removeItem("editCaseId");
    localStorage.setItem("editCaseId", caseObject.idCase.toString());
    this.router.navigate(['/editCase', caseObject.idCase]);

  }
}



