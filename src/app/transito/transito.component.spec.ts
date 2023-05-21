import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitoComponent } from './transito.component';

describe('TransitoComponent', () => {
  let component: TransitoComponent;
  let fixture: ComponentFixture<TransitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
