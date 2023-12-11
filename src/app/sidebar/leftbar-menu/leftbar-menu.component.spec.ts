import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarMenuComponent } from './leftbar-menu.component';

describe('LeftbarMenuComponent', () => {
  let component: LeftbarMenuComponent;
  let fixture: ComponentFixture<LeftbarMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftbarMenuComponent]
    });
    fixture = TestBed.createComponent(LeftbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
