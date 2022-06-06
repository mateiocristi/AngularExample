import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPacientComponent } from './edit-pacient.component';

describe('EditPacientComponent', () => {
  let component: EditPacientComponent;
  let fixture: ComponentFixture<EditPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPacientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
