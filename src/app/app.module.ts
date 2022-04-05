import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpTokenInterceptor } from 'src/http.token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeApiService } from 'src/fake-api.service';
import { ApiService } from 'src/api.service';
import { LoadingService } from 'src/loader/loader.service';
import { LoaderDirective } from 'src/loader/loader.directive';
import { LoaderButtonComponent } from 'src/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderDirective,
    LoaderButtonComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    FakeApiService,
    ApiService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
