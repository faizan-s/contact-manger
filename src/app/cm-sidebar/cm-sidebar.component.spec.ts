import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmSidebarComponent } from './cm-sidebar.component';

describe('CmSidebarComponent', () => {
  let component: CmSidebarComponent;
  let fixture: ComponentFixture<CmSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CmSidebarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
