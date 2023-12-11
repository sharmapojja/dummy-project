import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { LearningPlanComponent } from './pages/learning-plan/learning-plan.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { SettingComponent } from './pages/setting/setting.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'classes', component: ClassesComponent},
  { path: 'learning-plan', component: LearningPlanComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'setting', component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
