// Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Components
import {AppComponent} from './app.component';

// Content Components
import {DashboardComponent} from './dashboard/dashboard.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {BudgetComponent} from './budget/budget.component';
import {ReportComponent} from './report/report.component';
import {AccountComponent} from './account/account.component';

// Layout Components
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

// Routes
import {RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
  {path: '', redirectTo: 'transactions', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'report', component: ReportComponent},
  {path: 'account', component: AccountComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BudgetComponent,
    TransactionsComponent,
    PageNotFoundComponent,
    ReportComponent,
    SidebarComponent,
    HeaderComponent,
    AccountComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
