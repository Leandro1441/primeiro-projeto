import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTelaComponent } from './menu-tela.component';

describe('MenuTelaComponent', () => {
  let component: MenuTelaComponent;
  let fixture: ComponentFixture<MenuTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
