import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  color="";
  size='12px';
  Changecolor(inputColor: { value: string; }){
    this.color=inputColor.value;


  }
  ChangeSize(inputSize: { value: string; }){
    this.size=(inputSize.value).concat('px');

  }

}
