import { Component } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  est = false;
  milan = true;
  barca = false;
  show=true;

  ChangeTeam(){
   this.est=true;
   this.barca=false;
   this.milan=false;
  }
}
