import { Component } from '@angular/core';
import { CocktailListComponent } from './components/cocktail-list.component';
import { CocktailsDetailsComponent } from './components/cocktails-details.component';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailListComponent, CocktailsDetailsComponent],
  template: `
  <app-cocktail-list class="flex-auto card"/>
  <app-cocktails-details class="flex-auto card"/>
  `,
  styles: `
  :host {
    display: flex;
    gap: 24px;
    padding: 24px;
  }`
})
export class CocktailsComponent {

}
