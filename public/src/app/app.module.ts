import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { PollNewComponent } from './poll-new/poll-new.component';
import { PollShowComponent } from './poll-show/poll-show.component';
import { OptionService } from './option.service';
import { PollService } from './poll.service';
import { FilterPipe} from './filter.pipe';
import { OptionsCreateComponent } from './options-create/options-create.component';

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PollNewComponent,
    PollShowComponent,
    OptionsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    OptionService,
    PollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }