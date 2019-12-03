import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 @Output() onSubmitButtonClicked = new EventEmitter<string[]>();
  constructor() { }

  ngOnInit() {
  }

  title:string;
  actor:string;
  startingProductionYear:string;
  endingProductionYear:string;

  onSubmit(){
    this.onSubmitButtonClicked.emit([this.title, this.actor, this.startingProductionYear, this.endingProductionYear]);
    console.log("btn_dwn");
    this.title='';
    this.actor='';
    this.startingProductionYear=null;
    this.endingProductionYear=null;
    }

}
