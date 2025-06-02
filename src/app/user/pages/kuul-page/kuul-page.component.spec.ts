import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuulPageComponent } from './kuul-page.component';

describe('KuulPageComponent', () => {
  let component: KuulPageComponent;
  let fixture: ComponentFixture<KuulPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KuulPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KuulPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
