import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SettingComponent } from './pages/setting/setting.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { LearningPlanComponent } from './pages/learning-plan/learning-plan.component';
import { LeftbarMenuComponent } from './sidebar/leftbar-menu/leftbar-menu.component';
import { RightbarComponent } from './sidebar/rightbar/rightbar.component';
import { TestService } from './test.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    ChatComponent,
    SettingComponent,
    DashboardComponent,
    ResourcesComponent,
    LearningPlanComponent,
    LeftbarMenuComponent,
    RightbarComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TestService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
