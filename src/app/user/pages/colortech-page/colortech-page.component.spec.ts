import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColortechPageComponent } from './colortech-page.component';

describe('ColortechPageComponent', () => {
  let component: ColortechPageComponent;
  let fixture: ComponentFixture<ColortechPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColortechPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColortechPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
