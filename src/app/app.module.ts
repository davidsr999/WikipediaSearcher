import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './pages/search/search.module';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleModule } from './pages/article/article.module';
import { ArticleeComponent } from './pages/articlee/articlee.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ArticleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
