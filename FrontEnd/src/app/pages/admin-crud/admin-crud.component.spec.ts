import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrudComponent } from './admin-crud.component';

describe('AdminCrudComponent', () => {
  let component: AdminCrudComponent;
  let fixture: ComponentFixture<AdminCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
