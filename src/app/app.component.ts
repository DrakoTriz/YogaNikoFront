import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, HeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  showAnimated = true; // muestra el video al inicio
  showContent = false; // contenido oculto hasta que termine el video

  onVideoEnd() {
    this.showAnimated = false;
    this.showContent = true;
  }
  title = 'YogaNikoFront';
   mouseX = 0;
  mouseY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    this.mouseX = (e.clientX - centerX) / centerX; // rango -1 a 1
    this.mouseY = (e.clientY - centerY) / centerY; // rango -1 a 1
  }
}
