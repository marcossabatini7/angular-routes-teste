import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { FullWidthComponent } from './full-width.component';
import { LoginComponent } from 'src/app/views/login/login.component';

@NgModule({
  declarations: [FullWidthComponent, LoginComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class FullWidthModule {}
