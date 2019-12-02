import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title:string;
  actor:string;
  startingProductionYear:number;
  endingProductionYear:number;

  onSubmit(){
    console.log("btn_dwn");
    this.title='';
    this.actor='';
    this.startingProductionYear=null;
    this.endingProductionYear=null;
    }

}
