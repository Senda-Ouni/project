import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetenCoursComponent } from './projeten-cours.component';

describe('ProjetenCoursComponent', () => {
  let component: ProjetenCoursComponent;
  let fixture: ComponentFixture<ProjetenCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetenCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetenCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
