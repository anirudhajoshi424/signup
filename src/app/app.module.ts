import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { LinkComponent } from './link/link.component';
import { ExitComponent } from './exit/exit.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LinkComponent,
    ExitComponent
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot([
      { path: '', redirectTo: 'link', pathMatch: 'full'},
      { path: 'link', component: LinkComponent},
      { path: 'signin', component: SigninComponent},
      { path: 'exit', component: ExitComponent}
    ])
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
