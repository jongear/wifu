import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NetNeutralityComponent } from './net-neutrality/net-neutrality.component';
import { D3Module } from './d3/d3.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        NetNeutralityComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        D3Module
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
