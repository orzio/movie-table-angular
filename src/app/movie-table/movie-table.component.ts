import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit {

  constructor() {

   }
   @Input()  film:{title:string, year:number, cast:[],geners:[]}[];

  ngOnInit() {

    }
  }

 




