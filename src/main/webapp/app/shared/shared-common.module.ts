import { NgModule } from '@angular/core';

import { ThirdpartydashboardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ThirdpartydashboardSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ThirdpartydashboardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ThirdpartydashboardSharedCommonModule {}
