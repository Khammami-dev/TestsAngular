import { Component, Input } from '@angular/core';
import { Personne } from '../models/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
 @Input() personne : Personne = new Personne();

  constructor(){}

}
