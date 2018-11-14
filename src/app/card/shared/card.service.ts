import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CardDeck, Card } from './card.model';

@Injectable()
export class CardService {

    private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com';
    private readonly API_KEY = 'qUO5HOf56GmshBrVkcWqo1L2URCPp1UHiaCjsnMPrFl9cywuJV';

    private headers: HttpHeaders;

    private readonly cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman', 'Priest', 'Warlock', 'Hunter', 'Paladin'];

    constructor(private http: HttpClient){
        this.headers = new HttpHeaders({'X-Mashape-Key': this.API_KEY});
    }

    public getAllCardDecks(): Observable<CardDeck[]> {
        return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers: this.headers});
    }

    public getCardsByDeck(CardDeckGroup: string, cardDeck: string): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${CardDeckGroup}/${cardDeck}`, {headers: this.headers});
    }

    public getCardById(cardId: string): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardId}`, {headers: this.headers});
    }
}