import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes : Personne[] ;

  constructor() { 
    this.personnes= [
      new Personne(1,'hammami','khouloud','Ingénieur','khouloud.jpg',77777,28),
      new Personne(2,'hammami','habib','chef','khouloud.jpg',44444,60)

    ];
  }
  getPersonne () : Personne[]{
    return this.personnes;

  }
}
