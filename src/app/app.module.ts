import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';


// import {MdCardModule} from '@angular/material';
// import {MdButtonModule} from '@angular/material';

import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';
import { MdProgressBarModule } from '@angular/material';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ListSongsComponent } from './mp3/list-songs/list-songs-mp3.component';


import { Mp3Service } from './mp3/mp3.service';


@NgModule({
  declarations: [
    AppComponent,ListSongsComponent
  ],
  imports: [
    BrowserModule, HttpModule, BrowserAnimationsModule, MdCardModule, MdButtonModule, MdIconModule,
    MdSliderModule, FormsModule, MdProgressBarModule


  ],
  providers: [Mp3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
