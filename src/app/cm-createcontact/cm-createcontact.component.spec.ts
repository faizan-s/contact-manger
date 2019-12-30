import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmCreatecontactComponent } from './cm-createcontact.component';

describe('CmCreatecontactComponent', () => {
  let component: CmCreatecontactComponent;
  let fixture: ComponentFixture<CmCreatecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CmCreatecontactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmCreatecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
