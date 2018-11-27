import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {SnippetModule} from './snippet-list/snippet.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {AccountModule} from './account/account.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {CoreModule} from './core/core.module';

import {UidService} from './snippet-list/uid-service';

import {firebaseConfig} from '../environments/firebaseConfig';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AngularFireModule} from "@angular/fire";
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    SnippetModule,
    FormsModule,
    SidebarModule,
    AccountModule,
    DashboardModule
  ],
  providers: [UidService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
