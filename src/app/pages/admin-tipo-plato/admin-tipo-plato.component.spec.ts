import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipoPlatoComponent } from './admin-tipo-plato.component';

describe('AdminTipoPlatoComponent', () => {
  let component: AdminTipoPlatoComponent;
  let fixture: ComponentFixture<AdminTipoPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTipoPlatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTipoPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
