import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { AppointmentNewComponent } from './appointment-new/appointment-new.component';
import { AppointmentService } from './appointment.service';
import { FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AppointmentNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    AppointmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }