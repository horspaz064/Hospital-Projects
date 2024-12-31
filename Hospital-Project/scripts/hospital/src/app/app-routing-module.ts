import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { BillpaymentComponent } from '../components/billpayment/billpayment.component';
import { HomeComponent } from '../components/home/home.component';
import { AppComponent } from './app.component';




const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'sidebar',
        component: SidebarComponent
    },
    {
        path: 'billpayment',
        component: BillpaymentComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }