import { Component, OnInit } from '@angular/core';
import { TestService } from "../test.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [TestService]
})
export class MoviesComponent implements OnInit {

  movies:any;
  movie={};
  movieLoaded:boolean=false;
  constructor(public apiService:TestService) {
    this.loadAllMovies();
   }

  ngOnInit() {
  }

  loadAllMovies(){
    this.apiService.loadAllData().subscribe(data=>{
      console.log("Got data");
      console.log(data);
      this.movies=data;
    },err=>{
      console.log("Data failed");
      console.log(err);
    });
  }
  
    getMovie(id:string){
      this.apiService.loadMovieById(id)
      .subscribe(data=>{
        console.log("selected movie");
        console.log(data);
        this.movie=data;
        this.movieLoaded=true;
      },err=>{
  
      });
    }

}
