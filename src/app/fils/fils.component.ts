import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
//interaction père fils
@Input()  filsProprity: any;
//interaction fils père
@Output() SendRequestToDad = new EventEmitter();
// SendRequestToDad  est un emetteur d'événement

ngOnInit(){
  console.log(this.filsProprity);
}
/* au clique sur un bouton dans le fils il va aller créer l'évenement 
et le déclancher, emis l'événement: dans emit on met a objet a envoyer au parent, un message etc..*/
sendEvent(){
  this.SendRequestToDad.emit(
    `please can i have some money Dad?`

  )
} 

}
