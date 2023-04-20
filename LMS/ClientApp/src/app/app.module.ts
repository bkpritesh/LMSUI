import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './account/account.module';
import { LayoutModule } from './layout/layout.module';
import { AdminModule } from './admin/admin.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule } from 'ngx-toastr';
import { DatepickerModule } from 'ng2-datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlsModule } from './controls/controls.module';
import { JWTInterceptor } from './account/AuthService/jwt.interceptor';
//import { LoaderInterceptor } from './controls/loader/loader.interceptor';

const routes: Routes = [
  
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule,
    DatepickerModule,
    BrowserAnimationsModule,
    ControlsModule,

    RouterModule.forRoot(routes),
    AccountModule,
    LayoutModule,
    AdminModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

  
export class AppModule { }
