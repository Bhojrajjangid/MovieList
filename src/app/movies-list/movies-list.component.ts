import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoviemodalComponent } from '../moviemodal/moviemodal.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  userName: any = 'bjjkhkh';
  movieData: any[] = [];
  tempMoviesData: any[] = [];
  searchText: any = '';
  noMovies: any = false;
  constructor(public movieService: LoginService, private modalService: NgbModal,
    public router: Router) {
    this.userName = localStorage.getItem('userName')
    console.log('Movie page token is :', localStorage.getItem('userToken'))
    // this.movieData = [{
    //   title: 'Ra one',
    //   description: 'a description of the movie',
    //   genres: 'a comma separated list of genres,'
    // }, {
    //   title: 'Mission impossible',
    //   description: 'a description of the movie',
    //   genres: 'a comma separated list of genres,'
    // }, {
    //   title: 'spiderman',
    //   description: 'a description of the movie',
    //   genres: 'a comma separated list of genres,'
    // }, {
    //   title: 'night at the museum',
    //   description: 'a description of the movie',
    //   genres: 'a comma separated list of genres,'
    // }, {
    //   title: 'one',
    //   description: 'a description of the movie',
    //   genres: 'a comma separated list of genres,'
    // }];

    // this.tempMoviesData = this.movieData;
    // if (this.tempMoviesData.length == 0) {
    //   this.noMovies = true;
    // }
  }

  ngOnInit(): void {
    // this.movieService.getMovies(localStorage.getItem('userToken')).subscribe((movieData: any) => {
    //   console.log(movieData.JSON)
    //   this.movieData = movieData.Search;
    // }, error => { console.log(error) });
    // this.tempMoviesData = this.movieData;
    // if (this.tempMoviesData.length == 0) {
    //   this.noMovies = true;
    // }
    fetch('http://www.omdbapi.com/https://www.omdbapi.com/?apikey=da8804af&s=batman')
    .then((response:any)=>{response.json();
    console.log('the data is ',response)
  }).then((res:any)=>{this.movieData = res.Search});
    this.tempMoviesData = this.movieData;
    if (this.tempMoviesData.length == 0) {
      this.noMovies = true;
    }
  }
  returntext(text: any) {
    let initials = "";

    for (let j = 0; j < text.length; j++) {
      if (j == 0) {
        initials += text.charAt(j);
      }
      if (text.charAt(j) === ' ') {
        initials += text.charAt(j + 1);
        break;
      }
    }
    return initials.toUpperCase();
  }
  openVerticallyCentered(content: any) {
    const modalRef = this.modalService.open(MoviemodalComponent);
    modalRef.componentInstance.movieContent = content;
  }
  onInputChange() {
    console.log(this.searchText)
    if (!this.searchText.length) {
      this.noMovies = false;
      this.tempMoviesData = this.movieData;
    }
    else {
      this.tempMoviesData = [];

      this.movieData.forEach(ele => {
        if (ele.Title.toLowerCase().includes(this.searchText.toLowerCase())) {
          this.tempMoviesData.push(ele)
        }
      })
      if (this.tempMoviesData.length == 0) {
        this.noMovies = true;
      }
    }
  }
  textChange(evetn: any) {
    if (evetn.target.value == '') {
      this.noMovies = false;
      this.tempMoviesData = this.movieData;
    }
  }
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
