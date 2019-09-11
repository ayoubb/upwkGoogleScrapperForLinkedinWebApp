import { NgModule } from '@angular/core';

import {
  UpwkGoogleScrapperForLinkedinWebAppSharedLibsModule,
  FindLanguageFromKeyPipe,
  JhiAlertComponent,
  JhiAlertErrorComponent
} from './';

@NgModule({
  imports: [UpwkGoogleScrapperForLinkedinWebAppSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
  exports: [UpwkGoogleScrapperForLinkedinWebAppSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class UpwkGoogleScrapperForLinkedinWebAppSharedCommonModule {}
