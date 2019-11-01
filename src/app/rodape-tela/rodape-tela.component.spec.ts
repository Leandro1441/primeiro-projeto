import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeTelaComponent } from './rodape-tela.component';

describe('RodapeTelaComponent', () => {
  let component: RodapeTelaComponent;
  let fixture: ComponentFixture<RodapeTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodapeTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapeTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
