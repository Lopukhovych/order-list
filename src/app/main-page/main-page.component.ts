import {Component, OnInit} from '@angular/core';
import {CartListService} from '../services/cart-list.service';
import {Data} from '../models/list-item.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    dataList: Data[];
    filterForm: FormGroup;

    constructor(private cartListService: CartListService) {
    }

    ngOnInit() {
        this.dataList = this.cartListService.showDataList();
        this.filterForm = new FormGroup({
            'filterInput': new FormControl()
        });
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

    onFilterData() {
        this.dataList = this.cartListService.filterData(this.filterForm.controls.filterInput.value);
    }
}
