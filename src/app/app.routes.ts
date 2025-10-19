import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
   { path: '', component: HomeComponent },
 // { path: 'fotos', component: FotosComponent },
 // { path: 'videos', component: VideosComponent },
  //{ path: 'productos', component: ProductosComponent },
  { path: '**', redirectTo: '' }
];
