import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponenteComponent } from './crud-componente.component';

describe('CrudComponenteComponent', () => {
  let component: CrudComponenteComponent;
  let fixture: ComponentFixture<CrudComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
