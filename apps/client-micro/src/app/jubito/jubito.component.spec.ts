import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JubitoComponent } from './jubito.component';

describe('JubitoComponent', () => {
  let component: JubitoComponent;
  let fixture: ComponentFixture<JubitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JubitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JubitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
