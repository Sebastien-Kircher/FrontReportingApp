import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  isAuth = false;

  appareils: any[];
  users: any[];
  
  constructor(private appareilService: AppareilService, private userService: UserService) {

  }
  
  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
      if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
        this.appareilService.switchOffAll();
      } else {
        return null;
      }
  }
  
  onSave() {
    this.userService.saveUserToServer();
}
  onGet(){
    this.users = this.userService.users;
    this.userService.updateUserFromServer().subscribe(data => {
      this.users = data;
    });
    
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
}

