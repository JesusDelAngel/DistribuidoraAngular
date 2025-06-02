import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipalProductsComponent } from './page-principal-products.component';

describe('PagePrincipalProductsComponent', () => {
  let component: PagePrincipalProductsComponent;
  let fixture: ComponentFixture<PagePrincipalProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePrincipalProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePrincipalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
