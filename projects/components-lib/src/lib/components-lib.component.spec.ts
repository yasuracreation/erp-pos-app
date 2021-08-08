import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLibComponent } from './components-lib.component';

describe('ComponentsLibComponent', () => {
  let component: ComponentsLibComponent;
  let fixture: ComponentFixture<ComponentsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
