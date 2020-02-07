import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCratesComponent } from './my-crates.component';

describe('MyCratesComponent', () => {
  let component: MyCratesComponent;
  let fixture: ComponentFixture<MyCratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
