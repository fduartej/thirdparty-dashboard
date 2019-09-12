import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThirdpartydashboardSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ThirdpartydashboardSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ThirdpartydashboardSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThirdpartydashboardSharedModule {
  static forRoot() {
    return {
      ngModule: ThirdpartydashboardSharedModule
    };
  }
}
