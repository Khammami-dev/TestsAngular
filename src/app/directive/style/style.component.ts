import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {
  /*l'element color peut etre parametrable par l'utilisateur de ce comosant */ 
 @Input() color = "white";
 @Input() bgcolor = "lightblue";

}
