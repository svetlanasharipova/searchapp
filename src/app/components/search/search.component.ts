import { SearchItem } from './../../searchresult';
import { SearchService } from './../../common/services/search.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  public data: SearchItem[];

  constructor(private _searchService: SearchService) { }

  ngOnInit() {
    this._searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.data = results.items;
      });
  }

  public searchTermChanged(val: string) {
    if (val) {
      this.searchTerm$.next(val);
    }

  }
}
