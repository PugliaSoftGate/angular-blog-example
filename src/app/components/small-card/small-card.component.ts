import { Component,Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = "";

  @Input()
  cardTitle:string = "";

  @Input()
  Id:string = "";

  private id:string | null= "0";

  constructor(){

  }
  ngOnInit(): void {

      this.setValuesToComponent(this.Id);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(val => val.id == id)[0];
    this.cardTitle = result.title;
    this.photoCover = result.photo;
  }

}
