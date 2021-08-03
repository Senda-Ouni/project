import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { ProjetsTermineComponent } from './components/projets-termine/projets-termine.component';
import { ProjetsPlanifieComponent } from './components/projets-planifie/projets-planifie.component';
import { ProjetenCoursComponent } from './components/projeten-cours/projeten-cours.component';
import { ProjetsArreteTemporairementComponent } from './components/projets-arrete-temporairement/projets-arrete-temporairement.component';
import { ProjetsAnnuleComponent } from './components/projets-annule/projets-annule.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationUrls } from './_configuration/configuration';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule} from "angular-6-datatable";
import { ProjetsenRetardComponent } from './components/projetsen-retard/projetsen-retard.component';
import { NewpipePipe } from './newpipe.pipe';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { ProjetDetailComponent } from './components/projet-detail/projet-detail.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent  },
  { path: 'projets', component: ProjetsComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: 'projetsTermine', component: ProjetsTermineComponent  },
  { path: 'projetsPlanifie', component: ProjetsPlanifieComponent  },
  { path: 'projetsenCours', component: ProjetenCoursComponent  },
  { path: 'projetsArreteTemporairement', component: ProjetsArreteTemporairementComponent  },
  { path: 'projetsAnnule', component: ProjetsAnnuleComponent  },
  { path: 'projetsenRetard', component: ProjetsenRetardComponent  },
  { path: 'ProjetDetail/:id', component: ProjetDetailComponent  },
  { path: 'Inscription', component: RegisterComponent  },

];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProjetsComponent,
    ProjetsTermineComponent,
    ProjetsPlanifieComponent,
    ProjetenCoursComponent,
    ProjetsArreteTemporairementComponent,
    ProjetsAnnuleComponent,
    ProjetsenRetardComponent,
    NewpipePipe,
    ProjetDetailComponent,
    LogInComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    DataTableModule,
    AgmSnazzyInfoWindowModule,
    AgmCoreModule.forRoot({
      apiKey: ''

    })
    ],
    schemas: [ NO_ERRORS_SCHEMA ],

  providers: [
    ConfigurationUrls],
  bootstrap: [AppComponent]
})
export class AppModule { }

