import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleeComponent } from './articlee.component';

describe('ArticleeComponent', () => {
  let component: ArticleeComponent;
  let fixture: ComponentFixture<ArticleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
