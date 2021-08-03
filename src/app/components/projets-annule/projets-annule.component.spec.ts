import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsAnnuleComponent } from './projets-annule.component';

describe('ProjetsAnnuleComponent', () => {
  let component: ProjetsAnnuleComponent;
  let fixture: ComponentFixture<ProjetsAnnuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsAnnuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsAnnuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
