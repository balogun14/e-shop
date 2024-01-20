import { StoreService } from './../../services/store/store.service';
import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item-services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  items: any = [];
  constructor(
    private itemService: ItemService,
    public storeService: StoreService
  ) {}
  ngOninit(): void {
    this.getItems();
  }
  getItems(): void {
    this.itemService
      .getItems()
      .subscribe((items) => (this.storeService.items = items));
  }
}
