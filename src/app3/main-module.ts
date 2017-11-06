import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App3} from './app3.component.ts';

import {enableProdMode} from '@angular/core';

import {APP_BASE_HREF} from "@angular/common";





@NgModule({
	imports: [
		BrowserModule
		
	],
	providers: [{provide: APP_BASE_HREF, useValue: '/app3/'}],
	declarations: [
		App3		
	],
	bootstrap: [App3]
})
export default class MainModule {
}
