import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrincipalPageComponent } from './user-principal-page.component';

describe('UserPrincipalPageComponent', () => {
  let component: UserPrincipalPageComponent;
  let fixture: ComponentFixture<UserPrincipalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPrincipalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPrincipalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
