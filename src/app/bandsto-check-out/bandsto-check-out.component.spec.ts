import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandstoCheckOutComponent } from './bandsto-check-out.component';

describe('BandstoCheckOutComponent', () => {
  let component: BandstoCheckOutComponent;
  let fixture: ComponentFixture<BandstoCheckOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandstoCheckOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandstoCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
