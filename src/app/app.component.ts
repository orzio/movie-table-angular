import { Component, EventEmitter, Output , Input} from '@angular/core';
import * as data from './movies.json';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){}

  ngOnInit(){
    for(let i=0; i<this.counter; i++)
        this.moviesToDisplay.push(this.movies[i]);

  this.fillMoviesArrays();
  this.fillMoviesByGenersArray();
  this.groupArray(this.genersGroup, 'gener');
  console.log(this.grouppedMoviesByGenersArray);
}
  title = 'zadanie-trzecie';
  diffrenceBetweenMoviesAndMoviesToDisplayLength:number;
  movies:any= (data as any).default;
  moviesToDisplay:{title:string, year:number, cast:[],genres:[]}[] = [];
  moviesBygeners:{title:string, year:number, cast:[],genres:[]}[] = [];
  moviesByCast:{title:string, year:number, cast:[],genres:[]}[] = [];
  genersGroup:any = [];
  counter:number =10;
  grouppedMoviesByGenersArray:any =[];






  /**Functions */

  onAddPositions(){
    console.log('odebrane');
    let prevCounter = this.counter;
    this.diffrenceBetweenMoviesAndMoviesToDisplayLength = this.movies.length - this.counter;
    if( this.diffrenceBetweenMoviesAndMoviesToDisplayLength > 10){
      this.counter+=10;
    }else {
      this.counter +=this.diffrenceBetweenMoviesAndMoviesToDisplayLength;
    }
    for(prevCounter; prevCounter<this.counter; prevCounter++){
      this.moviesToDisplay.push(this.movies[prevCounter]);
    }
  }

  fillMoviesArrays(){
    let counter =0;
    for(let movie of this.movies){
      if(counter<=100){
        this.moviesBygeners.push(movie);
        this.moviesByCast.push(movie);
        counter++;
      }else break;
    }
  }


  fillMoviesByGenersArray(){
    for(let movie of this.moviesBygeners){
      if(movie.genres.length ==0){
        console.log("w ifie");
        this.genersGroup.push({title:movie.title,
          gener:"Unknown"});
          continue;
      }else{
      for(let count =0; count < movie.genres.length; count++){
        this.genersGroup.push({title:movie.title,
                                gener:movie.genres[count]});
      }
      }
    }
  }

  groupArray(list, selector){
    this.grouppedMoviesByGenersArray = _.groupBy(list, selector);
  }






}
