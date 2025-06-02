import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampooPageComponent } from './shampoo-page.component';

describe('ShampooPageComponent', () => {
  let component: ShampooPageComponent;
  let fixture: ComponentFixture<ShampooPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShampooPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShampooPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
