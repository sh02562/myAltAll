import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicScrollComponent } from './dynamic-scroll.component';

describe('DynamicScrollComponent', () => {
  let component: DynamicScrollComponent;
  let fixture: ComponentFixture<DynamicScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicScrollComponent]
    });
    fixture = TestBed.createComponent(DynamicScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
