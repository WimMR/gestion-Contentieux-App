import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/models/tache';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit{;

  newTache :Tache = new Tache();
  taches!: Tache[];

  constructor(
    private tacheService: TacheService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.findAllTaches();

  }

  findAllTaches(){
    this.tacheService.findAll().subscribe(data => {this.taches = data;});
  };

  saveTache(){
    this.tacheService.save(this.newTache).subscribe(
      (response) => {
        this.findAllTaches();
        this.newTache = new Tache();
      }
    )
  }

}
