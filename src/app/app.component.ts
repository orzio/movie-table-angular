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
  moviesToDisplay:{title:string, year:number, cast:string[],genres:[]}[] = [];
  filteredMovies:{title:string, year:number, cast:string[],genres:[]}[] = [];
  moviesBygeners:{title:string, year:number, cast:string[],genres:[]}[] = [];
  moviesByCast:{title:string, year:number, cast:string[],genres:[]}[] = [];
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
    for(let[i,v] of this.movies.entries()){
      if(i>=400 && i<=500){
        console.log(i);
        this.moviesBygeners.push(v);
        this.moviesByCast.push(v);
    } else if(i>500)
      break;
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
        list.push(prop);
      }
    }
  }


  onFilter(filterArray){
    if(filterArray[0] !=undefined){
      this.filteredMovies = _.filter(this.filteredMovies, (movie)=>{
        return movie['title'].toUpperCase().includes(filterArray[0].toUpperCase());
      })
    }

if(filterArray[1] !=undefined){
  this.filteredMovies = _.filter(this.filteredMovies, (movie)=>{
  if(movie.cast != undefined){
    for(let i =0; i<movie.cast.length; i++){
    console.log(movie.cast[i]);
    return movie.cast[i].toUpperCase().includes(filterArray[1].toUpperCase());
  }
}

  })
}




    if(filterArray[2] !=undefined){
      console.log("w starting point");
      this.filteredMovies = _.filter(this.filteredMovies, (movie)=>{
        return (movie['year'] >= Number(filterArray[2]));
      })
  }

  if(filterArray[3] !=undefined){
    console.log('w ending');
    this.filteredMovies = _.filter(this.filteredMovies, (movie)=>{
      return movie['year']<= filterArray[3];
    })
}

let counter =0;
for(let i =0; i<4; i++){
  if(filterArray[i] == undefined){
    counter++;
    console.log(filterArray[i]);
  }
}
if(counter ==4){
  console.log("counter ==4");
  this.filteredMovies = this.moviesToDisplay;
}



}

}

