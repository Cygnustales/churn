import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipe/search.pipe';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DatabaseComponent } from './components/database/database.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DatabaseComponent,
    DashboardComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
