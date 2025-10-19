import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent {

  
  
  showGallery = false; // <--- declaración de la variable

  toggleGallery() {
    this.showGallery = !this.showGallery; // función para alternar
  }

}
