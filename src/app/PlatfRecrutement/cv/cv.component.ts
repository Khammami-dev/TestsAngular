import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/Personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[] = []; 
  selectedPersonne : Personne = new Personne;
  
  constructor(private CvService : CvService){}
  
  ngOnInit(){
    this.CvService.getPersonne();
  }
  PersonneSelected(personneSelected:any){
    this.selectedPersonne=personneSelected;

  }

}
