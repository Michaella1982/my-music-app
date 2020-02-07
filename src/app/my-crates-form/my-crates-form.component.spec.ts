import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCratesFormComponent } from './my-crates-form.component';

describe('MyCratesFormComponent', () => {
  let component: MyCratesFormComponent;
  let fixture: ComponentFixture<MyCratesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCratesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCratesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
