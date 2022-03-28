import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { FirebaseEmployeesServiceModule } from '@team';

@NgModule({
  imports: [
    CommonModule,
    OurTeamComponentModule,
    FirebaseEmployeesServiceModule,
    RouterModule.forChild([
      {
        path: 'o-nas',
        component: AboutUsPage,
      },
    ]),
  
 
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
