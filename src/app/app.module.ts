import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HttpModule} from '@angular/http';
import {MainPageComponent } from './main-page/main-page.component';
import {CartPageComponent } from './cart-page/cart-page.component';
import {AppRoutingModule} from './app-routing.module';
import {HistoryPageComponent } from './history-page/history-page.component';
import {ErrorComponent } from './error/error.component';
import {CartListService} from './services/cart-list.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainPageComponent,
        CartPageComponent,
        HistoryPageComponent,
        ErrorComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [CartListService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
