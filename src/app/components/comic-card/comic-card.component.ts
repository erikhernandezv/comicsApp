import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() comicSelected: EventEmitter<number>;

  constructor( private router:Router ) {
    this.comicSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate( ['/heroe', this.index] );
  }
}
