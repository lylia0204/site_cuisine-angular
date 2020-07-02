import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitifComponent } from './aperitif.component';

describe('AperitifComponent', () => {
  let component: AperitifComponent;
  let fixture: ComponentFixture<AperitifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperitifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperitifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
