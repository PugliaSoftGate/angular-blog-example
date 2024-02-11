import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'


@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "";

  @Input()
  cardTitle:string = "";

  @Input()
  cardDescription:string = "";

  @Input()
  Id:string = "";


  constructor(){

  }

  ngOnInit(): void {

    this.setValuesToComponent(this.Id);
  }

  setValuesToComponent(id:string | null){

    const result = dataFake.filter(article => article.id == id)[0];


    this.cardTitle = result.title;
    this.photoCover = result.photo;
    let firstPoint:number = 0;
    for(let i = 0; i <= result.description.length; i++ ){
        if(result.description[i] == '.'){
          firstPoint = i +1 ;
          break;
        }

    }

    this.cardDescription = result.description.substring(0, firstPoint).concat('.. [Continuar lendo] ');

  }
}
