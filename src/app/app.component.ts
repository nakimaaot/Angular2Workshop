import {HeroService} from "./services/hero.service";
import { HEROES } from "./model/mock-heroes";
import { Hero } from "./model/hero";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of heroes';
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): any {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
