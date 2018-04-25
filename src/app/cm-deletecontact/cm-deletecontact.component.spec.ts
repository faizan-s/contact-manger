import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmDeletecontactComponent } from './cm-deletecontact.component';

describe('CmDeletecontactComponent', () => {
  let component: CmDeletecontactComponent;
  let fixture: ComponentFixture<CmDeletecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmDeletecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmDeletecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
