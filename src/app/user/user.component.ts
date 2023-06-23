import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users: User[] =  [];
  constructor(private userService:UserService,
    private router:Router,
    ){
    
  }
  ngOnInit(): void {
    this.findAllUsers()
    
  }

  findAllUsers(){
    this.userService.findAll().subscribe(data => {this.users = data; console.log(this.users)});
  }
  deleteUser(idDelete:number){
    this.userService.delete(idDelete).subscribe(() => {
      this.findAllUsers();
    });
  }
  editUser(user:User){
    this.router.navigate(['/edit-User',user.idUtilisateur]); 
  }

}
