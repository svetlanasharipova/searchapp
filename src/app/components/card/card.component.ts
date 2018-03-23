import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SearchItem } from '../../searchresult';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent  {
@Input()
public item: SearchItem;
}
