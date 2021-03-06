import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { from } from 'rxjs';
import { ConvertToCharacter } from './shared/convert-to-character';
import { StarComponent } from './shared/star.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailsGuard } from './products/product-details.guard';

@NgModule({
  declarations: [AppComponent, ProductListComponent, StarComponent, ConvertToCharacter, ProductDetailsComponent, WelcomeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([

    { path: 'products', component: ProductListComponent },
    {
      path: 'product/:id', component: ProductDetailsComponent,
      canActivate: [ProductDetailsGuard]
    },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }

  ])],
  bootstrap: [AppComponent],
})
export class AppModule { }
