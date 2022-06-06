import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlePacientComponent } from './handle-pacient.component';

describe('HandlePacientComponent', () => {
  let component: HandlePacientComponent;
  let fixture: ComponentFixture<HandlePacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlePacientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandlePacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
