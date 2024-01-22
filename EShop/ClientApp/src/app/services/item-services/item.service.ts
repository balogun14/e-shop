import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from 'src/app/interface/item';
import { ItemPayload } from 'src/app/interface/item-payload';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  getItems(page: number, pageSize: number): Observable<ItemPayload> {
    let payload: ItemPayload = {
      items: mock_items.splice((page - 1) * pageSize, page * pageSize),
      count: mock_items.length,
    };
    return of(payload);
  }

  getItem(id: number): Observable<Item> {
    return of(mock_items[id - 1]);
  }
}

const mock_items = [
  {
    id: 1,
    name: 'Adidas Stan Smith',
    price: 90.0,
    category: 'Shoes',
    description: '',
  },
  {
    id: 2,
    name: 'Nike Air Max',
    price: 110.0,
    category: 'Shoes',
    description: '',
  },
  {
    id: 3,
    name: 'Reebok Sweat Shirt',
    price: 45.0,
    category: 'Clothes',
    description: '',
  },
  {
    id: 4,
    name: 'Puma T-Shirt',
    price: 30.0,
    category: 'Clothes',
    description: '',
  },
];
