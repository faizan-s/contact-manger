import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmListcontactsComponent } from './cm-listcontacts.component';

describe('CmListcontactsComponent', () => {
  let component: CmListcontactsComponent;
  let fixture: ComponentFixture<CmListcontactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmListcontactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmListcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
