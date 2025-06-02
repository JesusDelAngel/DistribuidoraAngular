import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServicesPageComponent } from './user-services-page.component';

describe('UserServicesPageComponent', () => {
  let component: UserServicesPageComponent;
  let fixture: ComponentFixture<UserServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserServicesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
