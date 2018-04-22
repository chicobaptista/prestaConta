import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoliticoPage } from './politico';

@NgModule({
  declarations: [
    PoliticoPage,
  ],
  imports: [
    IonicPageModule.forChild(PoliticoPage),
  ],
})
export class PoliticoPageModule {}
