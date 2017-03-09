import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { UserRegisterComponent } from './components/useraction/user-register/user-register.component';
import {  MiniStatementComponent } from './components/statements/mini-statement/mini-statement.component';
import {  FundTransferComponent } from './components/payments/fund-transfer/fund-transfer.component';

const appRoutes: Routes=[

   {
    path:'',
    component:UserRegisterComponent
  },
  {
    path:"payment",
    component:MiniStatementComponent
  },{
    path:"fundtransfer",
    component:FundTransferComponent
  }
  // {
  //   path:'',
  //   component:AppComponent
  // }
]

export const routing :ModuleWithProviders =RouterModule.forRoot(appRoutes);
