import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeEventsComponent } from './notice-events.component';

describe('NoticeEventsComponent', () => {
  let component: NoticeEventsComponent;
  let fixture: ComponentFixture<NoticeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticeEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
