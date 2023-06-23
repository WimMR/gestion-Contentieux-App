import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user : User = new User ; 
  editForm!:FormGroup;
  
  constructor(private userService:UserService,
    private route: ActivatedRoute,
    private formBuilder:FormBuilder,
    private router: Router){};
  
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      idUtilisateur:[],
      prenomUtilisateur:['',Validators.required],
      nomUtilisateur:['',Validators.required],
      email:['',Validators.required],
    })
  
    this.route.params.subscribe(params => {
      this.userService.findOne(params['id']).subscribe(data => {
        this.user = data
        this.editForm.patchValue(data);  
        console.log(this.user);    
      })
    });
  }

  updateUser(){
    var userString = JSON.stringify(this.editForm.value);
    this.userService.update(userString).subscribe(
      () =>{
        this.router.navigate(["/user"]);
      }
    )
  }

}
