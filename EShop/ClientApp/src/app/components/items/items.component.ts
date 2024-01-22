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
    this.storeService.pageSizeChanges$.subscribe((newPageSize) => {
      this.storeService.page = 1;
      this.getItems();
    });
    this.getItems();
  }
  getItems(): void {
    this.itemService
      .getItems(this.storeService.page, this.storeService.pageSize)
      .subscribe((itemPayload) => {
        this.storeService.items = itemPayload.items;
        this.storeService.count = itemPayload.count;
      });
  }
  onPageChange(): void {
    this.storeService._pageSizeSubject.next(this.storeService.pageSize);
  }
}
