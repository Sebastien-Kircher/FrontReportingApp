
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {
    appareils = [
        {
          name: 'MicroOnde',
          status: 'éteint'
        },
        {
          name: 'Frigo',
          status: 'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
      users = 
        {
            firstname: "Angular",
            lastname: "TypeScript",
            email: "t.a@yahoo.fr",
            tel: "060600545"
        }
      ;
    constructor(private httpClient: HttpClient) { }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
    }
    
    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
    }

    switchOnAll(){
        for(let appareil of this.appareils) {
        appareil.status = 'allumé'
        }
    }
    switchOffAll(){
        for(let appareil of this.appareils) {
        appareil.status = 'éteint'
        }
    }
    saveUserToServer() {
      this.httpClient
        .post('http://localhost:8282/api/v1/user', this.users)
        .subscribe(
          () => {
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
  }
}
 

