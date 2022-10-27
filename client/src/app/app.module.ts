import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PokeappComponent } from './components/pokeapp/pokeapp.component';
import { UsuariosService } from './services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { LoadingComponent } from './components/loading/loading.component';
import { MapScreenComponent } from './components/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegistroComponent,
    PokeappComponent,
    LoadingComponent,
    MapScreenComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'ad87c2843ea242eb8213b17393d17974'
    })
  ],
  providers: [UsuariosService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '1240578866731098'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
