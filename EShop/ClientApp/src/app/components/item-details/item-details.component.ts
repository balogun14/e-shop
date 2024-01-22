import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interface/item';
import { ItemService } from 'src/app/services/item-services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent {
  item: Item = { id: 0, name: '', price: 0, category: '', description: '' };
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {}
  ngOnInit(): void {
    this.getItem();
  }
  getItem(): void {
    const paramId = +this.route.snapshot.paramMap.get('id')!;
    if (!isNaN(paramId)) {
      this.itemService.getItem(paramId).subscribe((item) => (this.item = item));
    }
  }
  addToCart(): void {}
}
