import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personne : Personne [];

  constructor() { 
    /* au debut aucunne personne n'est ambauchée */
    this.personne=[];
  }

  /* récupérer l'ensemble des personnes qui ont embauchées */
  getEmbauche(){
    return this.personne;
  }
  /** Permet d'embaucher une personne */
   embauche (personne: Personne) : void {
    const index = this.personne.indexOf(personne);
    /** vérifier si la personne embaucher ou non, existe dans le tableau */
    if(index<0){
      this.personne.push(personne);

    }else{
      alert("personne est déja embauché");
    }
    
   }
   debauche(personne : Personne) : void{
    const index = this.personne.indexOf(personne);
    if(index>0){
      this.personne.splice(index,1);

    }

   }
}
