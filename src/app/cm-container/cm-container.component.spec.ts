import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmContainerComponent } from './cm-container.component';

describe('CmContainerComponent', () => {
  let component: CmContainerComponent;
  let fixture: ComponentFixture<CmContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
