
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    user = 
        {
            firstname: "Angular",
            lastname: "TypeScript",
            email: "t.a@yahoo.fr",
            tel: "060600545"
        }
      ;

     users = [{
      firstname: "",
      lastname: "",
      email: "",
      tel: ""
  }]; 
    constructor(private httpClient: HttpClient) { }

    
    saveUserToServer() {
        this.httpClient
          .post('http://localhost:8282/api/v1/user', this.user)
          .subscribe(
            () => {
              console.log('Enregistrement terminé !');
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    }
    updateUserFromServer(): Observable<any>{
     
      return this.httpClient.get('http://localhost:8282/api/v1/user');
    }
    getAll(): Observable<any> {
      return this.httpClient.get('http://localhost:8282/api/v1/user/3');
    }

}
