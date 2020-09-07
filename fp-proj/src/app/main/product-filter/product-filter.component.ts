import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'geszeft-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Output() search = new EventEmitter();
  searchValue$ = new Subject<string>();
  searchValue: string;

  private searchSubscription: Subscription;

  constructor() {
    this.searchSubscription = this.searchValue$.pipe(
      map(event => event),
      debounceTime(1000)
    ).subscribe(event => this.onSearchChange(event))
   }

  ngOnInit(): void {
  }

  onSearchChange(searchValue: string): void {
    this.searchValue = searchValue;
    this.search.emit();
  }

}
