import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsCreateComponent } from './options-create.component';

describe('OptionsCreateComponent', () => {
  let component: OptionsCreateComponent;
  let fixture: ComponentFixture<OptionsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
