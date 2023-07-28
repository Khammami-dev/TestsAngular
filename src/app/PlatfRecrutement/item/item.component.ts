import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../models/Personne';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() personne: Personne = new Personne();
  @Output() SendPersonneSelected = new EventEmitter();
  constructor(){}
  SendSelectedPersonne(){
    this.SendPersonneSelected.emit(
      this.personne
    );
  }

}
