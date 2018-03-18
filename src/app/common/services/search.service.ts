import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { User } from '../../Users';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {

  _baseUrl = 'https://api.github.com';
  _queryUrl = '/search/repositories?q=';

  constructor(private _http: HttpClient) { }

    // public searchGit(value: string): Observable<any[]> {
  //   return this._http.get<any[]>(`${this._baseUrl}/search/repositories?q=${value}`);
  // }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this._http
        .get(this._baseUrl + this._queryUrl + term);
  }
}
