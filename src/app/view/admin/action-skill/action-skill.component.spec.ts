import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSkillComponent } from './action-skill.component';

describe('ActionSkillComponent', () => {
  let component: ActionSkillComponent;
  let fixture: ComponentFixture<ActionSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
