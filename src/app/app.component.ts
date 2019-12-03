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
        this.filteredMovies = this.moviesToDisplay;

  this.fillMoviesArrays();
  this.fillMoviesByGenersArray();
  this.fillMoviesByCastArray();
  this.groupMovieByGener(this.genersGroup);
  this.getProperties(this.grouppedMoviesByGenersArray,this.geners);
  this.groupMovieByCast(this.castGroup);
  this.getProperties(this.groouppedMoviesByCastArray, this.cast);
}
  title = 'zadanie-trzecie';
  diffrenceBetweenMoviesAndMoviesToDisplayLength:number;
  movies:any= (data as any).default;
  moviesToDisplay:{title:string, year:number, cast:[],genres:[]}[] = [];
  filteredMovies:{title:string, year:number, cast:[],genres:[]}[] = [];
  moviesBygeners:{title:string, year:number, cast:[],genres:[]}[] = [];
  moviesByCast:{title:string, year:number, cast:[],genres:[]}[] = [];
  genersGroup:any=[];
  castGroup:any=[];
  geners:string[] = [];
  cast:string [] = [];
  counter:number =10;
  grouppedMoviesByGenersArray:any =[];
  groouppedMoviesByCastArray:any = [];
  @Input() filterSelectorsArray:string[] = [];

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

  //wypelniam tablice gatunkow i obsady pozycjami
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


  fillMoviesByCastArray(){
    for(let movie of this.moviesByCast){
      if(movie.cast.length ==0){
        this.castGroup.push({
          title:movie.title, cast:"Unknown"
        });
        continue;
      }else{
        for(let count =0; count<movie.cast.length; count++){
          this.castGroup.push({title:movie.title,
                                cast:movie.cast[count]});
        }
      }
    }
  }


//wypelniam 
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

  //metoda grupujaca filmy
  groupMovieByGener(list){
    this.grouppedMoviesByGenersArray = _.groupBy(list, 'gener');
  }

  groupMovieByCast(list){
    this.groouppedMoviesByCastArray = _.groupBy(list, 'cast');
  }


//metoda wyciagajaca propoeriesty z grup.
  getProperties(groupObject, list){
    for (var prop in groupObject) {
      if (Object.prototype.hasOwnProperty.call(groupObject, prop)) {
        console.log(prop);
        list.push(prop);
      }
    }
  }


  onFilter(filterArray){
    console.log(filterArray);
    this.filteredMovies = this.moviesToDisplay;
    console.log(filterArray);
    if(filterArray[0] !=undefined){
      console.log('w ifie');
      this.filteredMovies = _.filter(this.filteredMovies, (movie)=>{
        return movie['title'].toUpperCase().includes(filterArray[0].toUpperCase());
      })
    }

    if(filterArray[1] !=undefined){

  }

    if(filterArray[2] !=undefined){
      console.log("w starting point");
      this.filteredMovies = _.filter(this.filteredMovies, (movie)=>{
        console.log(movie['year']);
        console.log(Number(filterArray[2]));
        console.log(this.filteredMovies);
        console.log(movie['year'] >= Number(filterArray[2]));
        return (movie['year'] >= Number(filterArray[2]));
      })
  }

  if(filterArray[3] !=undefined){
    console.log('w ending')
    this.filteredMovies = _.filter(this.filteredMovies, (movie)=>{
      return movie['year']<= filterArray[3];
    })
}
  console.log(this.filteredMovies);



  
}

}

