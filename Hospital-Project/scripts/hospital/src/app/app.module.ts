import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { BillpaymentComponent } from "../components/billpayment/billpayment.component";
import { AppRoutingModule } from "./app-routing-module";



@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        BillpaymentComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }