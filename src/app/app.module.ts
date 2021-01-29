import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { IntroductionComponent } from './main/introduction/introduction.component';
import { OurWorksComponent } from './main/our-works/our-works.component';
import { ReadMoreComponent } from './main/read-more/read-more.component';
import { SliderComponent } from './main/slider/slider.component';
import { OurServicesComponent } from './main/our-services/our-services.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { OurTeamComponent } from './main/our-team/our-team.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

// const appRoutes: Routes = [
//   {path: '', component: MainComponent},
//   {path: 'header', component: HeaderComponent},
//   {path: 'our-works', component: OurWorksComponent},
//   {path: 'our-services', component: OurServicesComponent},
//   {path: 'about-us', component: AboutUsComponent},
//   {path: 'our-team', component: OurTeamComponent},
//   {path: 'blog', component: BlogComponent},
//   {path: 'contact-us', component: ContactUsComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    MainComponent,
    IntroductionComponent,
    OurWorksComponent,
    ReadMoreComponent,
    SliderComponent,
    OurServicesComponent,
    AboutUsComponent,
    OurTeamComponent,
    BlogComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
