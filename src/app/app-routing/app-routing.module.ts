import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LinkListComponent } from '../link-list/link-list.component';
import { SystemListComponent } from '../system/system-list/system-list.component';

const routes = [
  { path: '', redirectTo: '/links', pathMatch: 'full'},
  { path: 'links', component: LinkListComponent },
  { path: 'systems', component: SystemListComponent },
  { path: 'news', loadChildren: '../sports/sports.module#SportsModule' }, // lazy loading
  { path: 'news', loadChildren: '../markets/markets.module#MarketsModule'} // lazy loading
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
