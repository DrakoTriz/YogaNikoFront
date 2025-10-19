import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-card',
  imports:[CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
 // @Input() category!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() route!: string;

  constructor(private router: Router) {}

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
