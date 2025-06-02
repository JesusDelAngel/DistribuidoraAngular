import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyProfilePageComponent } from './user-my-profile-page.component';

describe('UserMyProfilePageComponent', () => {
  let component: UserMyProfilePageComponent;
  let fixture: ComponentFixture<UserMyProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMyProfilePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMyProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
