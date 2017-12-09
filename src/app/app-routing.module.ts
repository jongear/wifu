import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NetNeutralityComponent } from './net-neutrality/net-neutrality.component';

const routes: Routes = [
    { path: '', redirectTo: '/net-neutrality', pathMatch: 'full' },
    { path: 'net-neutrality', component: NetNeutralityComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
