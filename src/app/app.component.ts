import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CatalogModule } from './catalog/catalog.module';
import { MembershipModule } from './membership/membership.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CatalogModule, ShoppingCartModule, MembershipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Transflower Store';
}
