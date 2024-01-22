import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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
  private readonly _page = new BehaviorSubject<number>(1);
  readonly page$ = this._page.asObservable();
  get page(): number {
    return this._page.getValue();
  }
  set page(val: number) {
    this._page.next(val);
  }
  // private readonly _pageSize = new Subject<number>(3);
  // public pageSize$ = this._pageSize.asObservable();
  public pageSize: number = 3;
  public readonly _pageSizeSubject = new Subject<number>();
  public pageSizeChanges$ = this._pageSizeSubject.asObservable();


  // get pageSize(): number {
  //   return this._pageSize.getValue();
  // }
  // set pageSize(val: number) {
  //   this._pageSize.next(val);
  // }
  private readonly _count = new BehaviorSubject<number>(1);
  readonly count$ = this._count.asObservable();

  get count(): number {
    return this._count.getValue();
  }
  set count(val: number) {
    this._count.next(val);
  }
}
