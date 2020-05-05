import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { from } from 'rxjs';
import { ConvertToCharacter } from './shared/convert-to-character';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, StarComponent, ConvertToCharacter],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
