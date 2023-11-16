import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Item} from "../dto/item";
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit{

  @Input()
  item!: Item;

  inCart = 0;

  constructor(private cartService: CartService,
              private itemService: ItemService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadInCartQty();
  }

  loadInCartQty(){
    this.inCart = this.cartService.getQtyInCart(this.item.code);
  }
  updateCart(increment: boolean) {
    increment? this.inCart++ : this.inCart--;
    this.cartService.updateCart(this.item, this.inCart);
  }

  navigateItem() {
    this.router.navigateByUrl(`/items/${this.item.code}`);
  }
}
