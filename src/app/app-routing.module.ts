import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainPageComponent} from './main-page/main-page.component';
import {CartPageComponent} from './cart-page/cart-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {ErrorComponent} from './error/error.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/main-page', pathMatch: 'full'},
    {path: 'main-page', component: MainPageComponent},
    {path: 'cart-page', component: CartPageComponent},
    {path: 'history-page', component: HistoryPageComponent},
    {path: '**', component: ErrorComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
