import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartListService} from '../services/cart-list.service';
import {Data} from '../models/list-item.model';
import {FormControl, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
    dataList: Data[];
    filterForm: FormGroup;
    subscription: any;

    constructor(private cartListService: CartListService) {
    }

    ngOnInit() {
        this.dataList = this.cartListService.showDataList();
        this.filterForm = new FormGroup({
            'filterInput': new FormControl()
        });
        // Filter delay to reduce server load when a user enters a query
        this.subscription = this.filterForm.controls.filterInput.valueChanges.debounceTime(300)
            .distinctUntilChanged()
            .subscribe(() => {
                this.dataList = this.cartListService.filterData(this.filterForm.controls.filterInput.value);
            })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onAddDataToCartList(item) {
        this.cartListService.addToCartList(item);
        alert(item.name + ' was added to Cart List');
    }

    onSortBottomToTop() {
        this.dataList = this.cartListService.sortDataListFromBottomToTop(this.dataList);
    }

    onSortTopToBottom() {
        this.dataList = this.cartListService.sortDataListFromTopToBottom(this.dataList);
    }
}
