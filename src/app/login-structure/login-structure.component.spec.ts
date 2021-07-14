import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStructureComponent } from './login-structure.component';

describe('LoginStructureComponent', () => {
  let component: LoginStructureComponent;
  let fixture: ComponentFixture<LoginStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
