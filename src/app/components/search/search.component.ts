import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:any = {};
  searchComic:string;

  @Input() heroe: any = {};
  @Input() index: number;

  constructor( private activatedRoute:ActivatedRoute,
               private heroesService:HeroesService,
               private router:Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.searchComic = params['searchText'];
      this.heroes = this.heroesService.searchComic( params['searchText'] );
      });
  }

  verHeroe(){
    this.router.navigate( ['/heroe', this.index] );
  }

}
