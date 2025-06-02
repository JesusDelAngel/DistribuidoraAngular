import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidracolorPageComponent } from './hidracolor-page.component';

describe('HidracolorPageComponent', () => {
  let component: HidracolorPageComponent;
  let fixture: ComponentFixture<HidracolorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HidracolorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HidracolorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
