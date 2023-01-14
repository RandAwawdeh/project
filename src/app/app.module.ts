import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutsModule } from "./core/components/layouts/layouts.module";
import { EventComponent } from './pages/events/events/event.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from 'src/environments/environment';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEventComponent } from './pages/add-event/add-event.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms';
import { UpdateDialogModule } from './core/components/update-dialog/update-dialog.module';
import { TechModule } from './pages/TechnicalsList/tech.module';
import { NgoComponent } from './pages/ngoList/ngo/ngo/ngo.component';
import { NgoModule } from './pages/ngoList/ngo/ngo.module';
import { ApproveComponent } from './pages/approve/approve/approve.component';
import { ApproveModule } from './pages/approve/approve/approve.module';
import { RequestModule } from './pages/request/request/request.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        UpdateDialogModule,
        LayoutsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        MatFormFieldModule,
        MatDialogModule,
        TechModule,
        NgoModule,
        FormsModule,
        ApproveModule,
        RequestModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
