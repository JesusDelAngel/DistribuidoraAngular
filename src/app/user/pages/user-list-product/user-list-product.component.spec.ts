import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListProductComponent } from './user-list-product.component';

describe('UserListProductComponent', () => {
  let component: UserListProductComponent;
  let fixture: ComponentFixture<UserListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
