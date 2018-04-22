import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoadorPage } from './doador';

@NgModule({
  declarations: [
    DoadorPage,
  ],
  imports: [
    IonicPageModule.forChild(DoadorPage),
  ],
})
export class DoadorPageModule {}
