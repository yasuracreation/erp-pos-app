import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorLibComponent } from './cor-lib.component';

describe('CorLibComponent', () => {
  let component: CorLibComponent;
  let fixture: ComponentFixture<CorLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
