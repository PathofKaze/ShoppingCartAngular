import { Component } from '@angular/core';
import { Registration } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cart: Registration[] = []
  
  newItem(newItem: Registration) {
    console.info('>>>> newItem:', newItem)
    this.cart = [...this.cart, newItem]
  }

  registrationDeleted(idx: number){
    const item: Registration[] = [ ...this.cart]
    item.splice(idx,1)
    this.cart = item
  }
}
