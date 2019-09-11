import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UpwkGoogleScrapperForLinkedinWebAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [UpwkGoogleScrapperForLinkedinWebAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [UpwkGoogleScrapperForLinkedinWebAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UpwkGoogleScrapperForLinkedinWebAppSharedModule {
  static forRoot() {
    return {
      ngModule: UpwkGoogleScrapperForLinkedinWebAppSharedModule
    };
  }
}
