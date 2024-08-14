import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegisterPlayerComponent } from './edit-register-player.component';

describe('EditRegisterPlayerComponent', () => {
  let component: EditRegisterPlayerComponent;
  let fixture: ComponentFixture<EditRegisterPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRegisterPlayerComponent]
    });
    fixture = TestBed.createComponent(EditRegisterPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
