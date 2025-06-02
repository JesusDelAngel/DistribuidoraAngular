import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyCarPageComponent } from './user-my-car-page.component';

describe('UserMyCarPageComponent', () => {
  let component: UserMyCarPageComponent;
  let fixture: ComponentFixture<UserMyCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMyCarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMyCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
