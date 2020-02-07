import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { MyCratesComponent } from './my-crates/my-crates.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BandstoCheckOutComponent } from './bandsto-check-out/bandsto-check-out.component';
import { MyCratesFormComponent } from './my-crates-form/my-crates-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    ArtistsComponent,
    AlbumsComponent,
    MyCratesComponent,
    WishlistComponent,
    BandstoCheckOutComponent,
    MyCratesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
