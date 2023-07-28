import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[] = []; 
  
  constructor(){}
  
  ngOnInit(){
    this.personnes= [
      new Personne(1,'hammami','khouloud','Ingénieur','khouloud.jpg',77777,28),
      new Personne(2,'hammami','habib','chef','khouloud.jpg',44444,60)

    ];
  }

}
