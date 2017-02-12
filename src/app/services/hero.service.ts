import {HEROES} from "../model/mock-heroes";
import {Hero} from "../model/hero";
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
