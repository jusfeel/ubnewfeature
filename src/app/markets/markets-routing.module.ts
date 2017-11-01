import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { MarketsComponent } from './markets.component';

const routes : Routes = [
  { path: "markets", component: MarketsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class MarketsRoutingModule { }
