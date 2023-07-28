import { Component, Input } from '@angular/core';
import { Personne } from '../models/Personne';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() personne: Personne = new Personne();

}
