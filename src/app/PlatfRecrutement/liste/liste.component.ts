import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../models/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Input() personnes: Personne[] = [];
  @Output() SendPersonneSelected2 = new EventEmitter();
  personneSelected : Personne = new Personne;
  selectedPersonne(SendPersonneSelected : any){
    /*console.log(SendPersonneSelected);*/
    this.personneSelected = SendPersonneSelected;


  }
  SendPersonneSelected (){
    this.SendPersonneSelected2.emit(
      this.SendPersonneSelected2

    )
  }

}
