import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRowAddComponent } from './dynamic-row-add.component';

describe('DynamicRowAddComponent', () => {
  let component: DynamicRowAddComponent;
  let fixture: ComponentFixture<DynamicRowAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicRowAddComponent]
    });
    fixture = TestBed.createComponent(DynamicRowAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
