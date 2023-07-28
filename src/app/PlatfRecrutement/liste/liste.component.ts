import { Component, Input } from '@angular/core';
import { Personne } from '../models/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Input() personnes: Personne[] = [];

}
