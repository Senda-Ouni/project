import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsTermineComponent } from './projets-termine.component';

describe('ProjetsTermineComponent', () => {
  let component: ProjetsTermineComponent;
  let fixture: ComponentFixture<ProjetsTermineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsTermineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
