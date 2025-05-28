import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductCategoryComponent } from './card-product-category.component';

describe('CardProductCategoryComponent', () => {
  let component: CardProductCategoryComponent;
  let fixture: ComponentFixture<CardProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProductCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
