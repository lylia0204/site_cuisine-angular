import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCategorieComponent } from './recette-categorie.component';

describe('RecetteCategorieComponent', () => {
  let component: RecetteCategorieComponent;
  let fixture: ComponentFixture<RecetteCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
