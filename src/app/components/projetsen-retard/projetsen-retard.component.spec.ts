import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsenRetardComponent } from './projetsen-retard.component';

describe('ProjetsenRetardComponent', () => {
  let component: ProjetsenRetardComponent;
  let fixture: ComponentFixture<ProjetsenRetardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsenRetardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsenRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
