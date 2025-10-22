import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Profile } from './profile/profile';
import { SharedModuleExampleModule } from '../../../../shared-module-example/shared-module-example-module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModuleExampleModule,
    Profile
  ]
})
export class UserModule { }
