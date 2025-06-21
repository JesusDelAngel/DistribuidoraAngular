import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuulLayoutPagesComponent } from './kuul-layout-pages.component';

describe('KuulLayoutPagesComponent', () => {
  let component: KuulLayoutPagesComponent;
  let fixture: ComponentFixture<KuulLayoutPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KuulLayoutPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KuulLayoutPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
