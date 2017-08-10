import {Cart, Data, HistoryItem} from '../models/list-item.model';

export class CartListService {
    dataList: Data[] = [
        new Data('margarita', ['basil', 'tomato', 'mozzarella'], 5.75),
        new Data('peperoni', ['peperoni', 'tomato', 'mozzarella', 'parmejano'], 7.00),
        new Data('marina', ['shrimp', 'parmejano', 'tuna', 'galric'], 15.75),
        new Data('meat', ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'], 12.00)
    ];
    cartList: Cart[] = [];
    cartListId = 0;
    historyList: HistoryItem[] = [];

    showDataList(): Data[] {
        return this.dataList.slice();
    }

    sortDataListFromBottomToTop(list: Data[]): Data[] {
        return list.sort(
            (a: Data, b: Data) => {
                if (a.price > b.price) {
                    return 1
                }
                if (a.price < b.price) {
                    return -1
                }
            }
        ).slice();
    }

    sortDataListFromTopToBottom(list: Data[]): Data[] {
        return list.sort(
            (a: Data, b: Data) => {
                if (a.price > b.price) {
                    return -1
                }
                if (a.price < b.price) {
                    return 1;
                }
            }
        ).slice();
    }

    filterData(value: string): Data[] {
        if (value === '') {
            return this.dataList.slice();
        }
        const filteredData: Data[] = [];
        this.dataList.forEach((item) => {
            if (item.name.indexOf(value) !== -1) {
                filteredData.push(item);
            }
        });
        return filteredData.slice();
    }

    addToCartList(dataItem) {
        this.cartList.push(new Cart(this.cartListId, dataItem, false));
        this.addToHistoryList(this.cartListId, dataItem);
        this.cartListId++;
    }

    showCartList(): Cart[] {
        return this.cartList.slice();
    }

    deleteElemFromCartList(numb): Cart[] {
        this.cartList.splice(numb, 1);
        return this.showCartList();
    }

    clearCartList(): Cart[] {
        this.cartList = [];
        return this.showCartList();
    }

    confirmCartListItems(id) {
        this.historyList.forEach((item) => {
            if (item.cart.id === id) {
                item.cart.confirmed = true;
            }
        });
    }

    addToHistoryList(id, dataItem) {
        this.historyList.push(new HistoryItem(new Cart(id, dataItem, false), new Date()));
    }

    showHistoryList(): HistoryItem[] {
        return this.historyList.slice();
    }

}
