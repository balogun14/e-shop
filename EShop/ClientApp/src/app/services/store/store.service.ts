import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/interface/item';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}
  private readonly _items = new BehaviorSubject<Item[]>([]);
  readonly item$ = this._items.asObservable();
  get items(): Item[] {
    return this._items.getValue();
  }
  set items(val: Item[]) {
    this._items.next(val);
  }
}
