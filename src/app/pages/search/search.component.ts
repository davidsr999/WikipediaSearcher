import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, filter, map, Observable, tap } from "rxjs";

@Component({
  selector: 'app-search',
  // templateUrl: './search.component.html',
  template:  `
  <div class="form">
    <form>
        <div class="form-field">
            <input type="text" [formControl]="inputSearch"
            placeholder="Search" >
        </div>
    </form>
  </div>`,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputSearch  = new FormControl('');
  @Output() submitted = new EventEmitter<any>();


  constructor() {
    // this.inputSearch.valueChanges.pipe(
    //   tap(res => console.log(res))
    // ).subscribe()
    
   }

  ngOnInit(): void {
    this.onChange();
  }

  onChange(): void {
    // this.inputSearch.valueChanges
    //   .pipe(
    //     tap(res => this.submitted.emit(res))
    //   )
    //   .subscribe();

    this.inputSearch.valueChanges
      .pipe(
        map((search) => search!.trim()),
        debounceTime(350),
        distinctUntilChanged(),
        filter((search: string) => search !== ''),
        tap((search: string) => this.submitted.emit(search))
      )
      .subscribe();
  }

}
