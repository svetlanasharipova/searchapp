import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './common/services/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatGridListModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NoopAnimationsModule, MatButtonModule,
     MatCardModule, MatGridListModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
