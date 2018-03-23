import { SearchResult } from './../../searchresult';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {

  _baseUrl = 'https://api.github.com';
  _queryUrl = '/search/repositories?q=';

  constructor(private _http: HttpClient) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term): Observable<SearchResult> {
    return this._http
        .get<SearchResult>(this._baseUrl + this._queryUrl + term);
  }
}
