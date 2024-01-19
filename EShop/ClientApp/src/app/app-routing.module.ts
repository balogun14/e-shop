import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'items/id', component: ItemDetailsComponent },
];
