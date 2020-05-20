import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from './services/config.service';
import { UserRegistrationService } from './services/user-registration.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    NgbModule
  ],
  providers: [
    ConfigService,
    UserRegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
