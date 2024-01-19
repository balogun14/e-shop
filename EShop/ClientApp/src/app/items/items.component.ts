import { Component } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  items: any = [];
  constructor(private itemService: ItemService) {}
  ngOninit(): void {
    this.getItems();
  }
  getItems(): void {
    this.itemService.getItems().subscribe((items) => (this.items = this.items));
  }
}
