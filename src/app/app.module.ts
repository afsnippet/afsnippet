import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { firebaseConfig } from '../environments/firebaseConfig';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';

import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';

import { AstViewerComponent } from './snippets/ast-viewer/ast-viewer.component';
import { NodeEqualsToPipe } from './utils/node-equals-to.pipe';
import { NodeItemComponent } from './snippets/node-item/node-item.component';
import { ScrollIntoViewDirective } from './directives/scroll-into-view.directive';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SnippetModule } from './snippets/snippet.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AccountModule } from './account/account.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';

import { UidService } from './snippets/uid-service';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { AboutUsComponent } from './about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SearchComponent,
    AboutUsComponent,
    AstViewerComponent,
    ScrollIntoViewDirective,
    NodeEqualsToPipe,
    NodeItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    SnippetModule,
    SidebarModule,
    AccountModule,
    DashboardModule,
    CovalentCodeEditorModule,
    CodemirrorModule
  ],
  providers: [UidService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
