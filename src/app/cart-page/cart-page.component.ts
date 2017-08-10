import {Component, OnInit} from '@angular/core';
import {CartListService} from '../services/cart-list.service';
import {Cart} from '../models/list-item.model';

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
    cartList: Cart[] = [];
    totalPrice = 0;
    confirmed = false;
    confirmedData: string;

    constructor(private cartListService: CartListService) {
    }

    ngOnInit() {
        this.cartList = this.cartListService.showCartList();
        this.cartList.forEach((item) => {
            return this.totalPrice += item.data.price;
        });
    }

    onRemoveCartItem(item, number) {
        this.cartList = this.cartListService.deleteElemFromCartList(number);
        this.totalPrice -= item.data.price;
    }

    onConfirm() {
        if (confirm('Are you sure you want to confirm the order?')) {
            this.confirmed = true;
            const addedData: string[] = [];
            this.cartList.forEach((item) => {
                addedData.push(item.data.name);
                this.cartListService.confirmCartListItems(item.id);
            });
            this.confirmedData = addedData.join(', ');
            this.cartList = this.cartListService.clearCartList();
        }
    }
}
