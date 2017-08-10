import {Component, OnInit} from '@angular/core';

import {CartListService} from '../services/cart-list.service';
import {HistoryItem} from '../models/list-item.model';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
    historyList: HistoryItem[] = [];
    dataOptions = {
        weekday: 'short',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };

    constructor(private cartListService: CartListService) {
    }

    ngOnInit() {
        this.historyList = this.cartListService.showHistoryList();
    }

}
