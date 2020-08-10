import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer.component';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from 'src/app/shared/shared.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('Component: Footer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientModule,
      ],
      providers: [AuthService, SharedService],
    });
  });

  it('should create the footer', () => {
    let fixture = TestBed.createComponent(FooterComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
