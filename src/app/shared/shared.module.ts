import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {
  ConfirmDialogModule,
  DropdownModule,
  InputTextModule,
  MessagesModule,
  PanelModule,
  ProgressSpinnerModule,
  TooltipModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TranslateModule} from '@ngx-translate/core';
import {AuthGuard} from './auth/auth.guard';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule,
    TooltipModule,
    DynamicDialogModule,
    ProgressSpinnerModule,
    DropdownModule

  ],
  declarations: [],
  exports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule,
    PanelModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule,
    TooltipModule,
    DynamicDialogModule,
    ProgressSpinnerModule,
    DropdownModule
  ],
  providers: []
})
export class SharedModule {}
