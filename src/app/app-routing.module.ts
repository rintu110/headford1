import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { BlogDetailsComponent } from './page/blog-details/blog-details.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactComponent } from './page/contact/contact.component';
import { FeatureComponent } from './page/feature/feature.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { QuoteComponent } from './page/quote/quote.component';
import { ServiceComponent } from './page/service/service.component';
import { TeamComponent } from './page/team/team.component';
import { TestimonialComponent } from './page/testimonial/testimonial.component';
import { DigitalAgencyComponent } from './page/digital-agency/digital-agency.component';
import { ResultsComponent } from './page/results/results.component';
import { ContentMarketingComponent } from './page/content-marketing/content-marketing.component';
import { LeadGenerationComponent } from './page/lead-generation/lead-generation.component';
import { B2bMarketingComponent } from './page/b2b-marketing/b2b-marketing.component';
import { WebDesignForGrowthComponent } from './page/web-design-for-growth/web-design-for-growth.component';
import { MarketingComponent } from './page/marketing/marketing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-details', component: BlogDetailsComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'team', component: TeamComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {path:'digital-agency', component:DigitalAgencyComponent  },
  {path:'result', component:ResultsComponent  },
  {path:'content-marketing', component:ContentMarketingComponent  },
  {path:'lead-generation', component:LeadGenerationComponent  },
  {path:'b2b-marketing', component:B2bMarketingComponent  },
  {path:'web-design-for-growth', component:WebDesignForGrowthComponent  },
  {path:'marketing', component:MarketingComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
