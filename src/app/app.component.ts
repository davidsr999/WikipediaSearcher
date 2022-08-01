import { Component } from '@angular/core';
import { Article, SearchService } from './pages/search/services/search.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  articles$ !: Observable<Article[]>;
  constructor(private readonly searchSvc: SearchService) {
    // this.searchSvc.search('angular')
    // .pipe(
    //   tap( res => console.log(res))
    // ).subscribe();
  }

  onSearch(term: string): void {
    // console.log(term);
    // this.searchSvc.search(term)
    // .pipe(
    //   tap( res => console.log(res))
    // ).subscribe();
    this.articles$ = this.searchSvc.search(term);
  }
}
