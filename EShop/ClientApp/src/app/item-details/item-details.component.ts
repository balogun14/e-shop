import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent {
  item = { id: 0, name: '', price: 0, category: '', description: '' };
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
