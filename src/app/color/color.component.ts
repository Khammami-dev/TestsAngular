import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  color: any;
  ChangeColor(input: { value: any; }){
    console.log(input.value);
    this.color= input.value;
    input.value="";
   
 
  }
   //interaction fils père
    /*le parent va écouter l'événement envoyer par le fils*/
  processRequest(message: any){
    alert(message);

  }
}
