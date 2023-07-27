import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  nom1="khouloud Hammami" ;
  img1="/assets/images/khouloud.jpg";
  age=28;
  profession="ingénieure IT"

  
  SendDetails(){
    alert("hi");
  }

}
