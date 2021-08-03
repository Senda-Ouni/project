import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsPlanifieComponent } from './projets-planifie.component';

describe('ProjetsPlanifieComponent', () => {
  let component: ProjetsPlanifieComponent;
  let fixture: ComponentFixture<ProjetsPlanifieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsPlanifieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsPlanifieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
