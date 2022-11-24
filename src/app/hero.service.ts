import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Heroes fetched.');
    return of(HEROES);
  }

  getHero(id: Number): Observable<Hero>{
    this.messageService.add("Hero fetched with id " + id);
    return of(HEROES.find(hero => id === hero.id));
  }
}
