import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { PostsComponent } from 'src/app/views/posts/posts.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DefaultComponent, HomeComponent, PostsComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class DefaultModule {}
