import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 @Output() onSubmitButtonClicked = new EventEmitter<any[]>();
  constructor() { }

  ngOnInit() {
  }

  title:string;
  actor:string;
  startingProductionYear:number;
  endingProductionYear:number;

  onSubmit(){
    this.onSubmitButtonClicked.emit([this.title, this.actor, this.startingProductionYear, this.endingProductionYear]);
    console.log("btn_dwn");
    this.title=null;
    this.actor=null;
    this.startingProductionYear=null;
    this.endingProductionYear=null;
    }

}
