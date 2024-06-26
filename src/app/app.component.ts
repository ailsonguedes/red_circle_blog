import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuBarComponent } from './components/menu-bar/menu-bar.component'
import { MenuTitleComponent } from './components/menu-title/menu-title.component'
import { FooterComponent } from './components/footer/footer.component'
import { BigCardComponent } from './components/big-card/big-card.component'
import { SmallCardComponent } from './components/small-card/small-card.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuBarComponent,
    MenuTitleComponent,
    FooterComponent,
    BigCardComponent,
    SmallCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'red_circle_blog';
}
