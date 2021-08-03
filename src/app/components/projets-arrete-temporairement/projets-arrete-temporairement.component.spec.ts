import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsArreteTemporairementComponent } from './projets-arrete-temporairement.component';

describe('ProjetsArreteTemporairementComponent', () => {
  let component: ProjetsArreteTemporairementComponent;
  let fixture: ComponentFixture<ProjetsArreteTemporairementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsArreteTemporairementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsArreteTemporairementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
