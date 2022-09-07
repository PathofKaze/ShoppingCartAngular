import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Registration } from '../model';

@Component({
  selector: 'app-formtable',
  templateUrl: './formtable.component.html',
  styleUrls: ['./formtable.component.css']
})
export class FormtableComponent implements OnInit {

  constructor() { }

  @Input()
  set cart(c: Registration[]) {
    this._cart = c
    this.calculateTotal()
  }

  _cart: Registration[] = []
  total = 0.0

  @Output()
  onDeleteItem = new Subject<number>()

    ngOnInit(): void {
      this.calculateTotal()
  }
  deleteItem(idx: number) {
    this.onDeleteItem.next(idx)
  }
  
  private calculateTotal() {
    this.total = 0
    for (let i of this._cart) {
      this.total += i.quantity * i.price
    }
  }
}


