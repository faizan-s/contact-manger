import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmEditcontactComponent } from './cm-editcontact.component';

describe('CmEditcontactComponent', () => {
  let component: CmEditcontactComponent;
  let fixture: ComponentFixture<CmEditcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CmEditcontactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmEditcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
