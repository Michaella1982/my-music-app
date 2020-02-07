import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from "./genres/genres.component";
import { ArtistsComponent } from "./artists/artists.component";
import { AlbumsComponent } from "./albums/albums.component";
import { MyCratesComponent } from "./my-crates/my-crates.component";
import { WishlistComponent } from "./wishlist/wishlist.component";



const routes: Routes = [
  {path:"genres", component:GenresComponent },
  {path:"artists", component:ArtistsComponent },
  {path:"albums", component:AlbumsComponent},
  {path:"my-crates", component:MyCratesComponent},
  {path:"wishlist",  component:WishlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
