import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{ path: '', component: AuthComponent }];
@NgModule({
  declarations: [AuthComponent],
  imports: [SharedModule, FormsModule, RouterModule.forChild(appRoutes)],
})
export class AuthModule {}
