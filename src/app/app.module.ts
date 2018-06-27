// Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

// Components
import {AppComponent} from './app.component';

// Content Components
import {DashboardComponent} from './dashboard/dashboard.component';
import {BudgetComponent} from './budget/budget.component';
import {ReportComponent} from './report/report.component';
import {AccountComponent} from './account/account.component';

// Layout Components
import {HeaderComponent} from './header/header.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

// Transaction
import {TransactionsComponent} from './transactions/transactions.component';
import {TransactionControlsComponent} from './transactions/controls/transaction-controls.component';
import {TransactionFormComponent} from './transactions/form/transaction-form.component';
import {TransactionFormInlineComponent} from './transactions/form-inline/transaction-form-inline.component';
import {TransactionListComponent} from './transactions/list/transaction-list.component';

// Services
import {TransactionServices} from './services/transaction.service';

// NgRx/Store
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TransactionsReducer } from './reducers/transactions';
import { NotificationsReducer } from './reducers/notifications';
import { environment } from '../environments/environment';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './effects/transaction.effects';

// Routes
import {RouterModule, Routes} from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
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
    PageNotFoundComponent,
    ReportComponent,
    HeaderComponent,
    AccountComponent,
    // Transactions
    TransactionsComponent,
    TransactionListComponent,
    TransactionFormComponent,
    TransactionControlsComponent,
    TransactionFormInlineComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({
      transactions: TransactionsReducer,
      notifications: NotificationsReducer,
    }),
    EffectsModule.forRoot([
      TransactionEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [TransactionServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
