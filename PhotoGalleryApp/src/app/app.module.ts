import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*
Good example of using angular-in-memory-web-api
https://stackblitz.com/angular/bbnkrbpaobm
*/
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PhotosInMemoryService } from './photos/photos.in-memory-service';

import { routingComponents } from "./routes";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { PhotosService } from './photos/photos.service';
import { BytesPipe } from './pipes/bytes.pipe';
import { AbbreviatedPipe } from './pipes/abbreviated.pipe';
import { FilterByPipe } from './pipes/filterBy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BytesPipe,
    FilterByPipe,
    AbbreviatedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    ,
    HttpClientInMemoryWebApiModule.forRoot(PhotosInMemoryService, { dataEncapsulation: false })
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
