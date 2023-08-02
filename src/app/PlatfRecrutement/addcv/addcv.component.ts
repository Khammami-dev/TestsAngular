import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcv',
  templateUrl: './addcv.component.html',
  styleUrls: ['./addcv.component.css']
})
export class AddcvComponent {
  addPersonne(formulaire: NgForm): void{
    console.log(formulaire);

  }

}
