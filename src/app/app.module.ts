// Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

// Components
import {AppComponent} from './containers/app.component';

// Containers
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {TransactionsComponent} from './containers/transactions/transactions.component';
import {BudgetComponent} from './containers/budget/budget.component';
import {ReportComponent} from './containers/report/report.component';
import {AccountComponent} from './containers/account/account.component';

// Components
import {TransactionListComponent} from './components/transactions/list/transaction-list.component';
import {TransactionControlsComponent} from './components/transactions/controls/transaction-controls.component';
import {TransactionFormInlineComponent} from './components/transactions/form-inline/transaction-form-inline.component';
import {TransactionFormComponent} from './components/transactions/form/transaction-form.component';

// Shared Components
import {HeaderComponent} from './components/shared/header/header.component';

// Other Components
import {PageNotFoundComponent} from './containers/page-not-found/page-not-found.component';
import {NotificationsComponent} from './containers/notifications/notifications.component';
import {NotiComponent} from './components/notification/noti.component';

// Transaction

// Services
import {TransactionServices} from './services/transaction.service';

// NgRx/Store
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {TransactionsReducer} from './store/reducers/transactions';
import {NotificationsReducer} from './store/reducers/notifications';
import {environment} from '../environments/environment';

// Effects
import {EffectsModule} from '@ngrx/effects';
import {TransactionEffects} from './store/effects/transaction.effects';

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
    NotificationsComponent,
    NotiComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({
      transactions: TransactionsReducer,
      notifications: NotificationsReducer,
    }),
    EffectsModule.forRoot([TransactionEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [TransactionServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
