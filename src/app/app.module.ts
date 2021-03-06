import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage'; 
import { Vibration } from '@ionic-native/vibration';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';

import { MyApp } from './app.component';


import { AgendamentoService } from '../domain/agendamento/agendamento-service';
import { AgendamentoDao } from '../domain/agendamento/agendamento-dao';
import { UsuarioService } from '../domain/usuario/usuario-service';

import { HomePage } from '../pages/home/home';
import { EscolhaPage } from '../pages/escolha/escolha';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

function provideStorage() {
  return new Storage({ 
    name: 'aluracar',
    storeName: 'agendamentos',
    driverOrder: ['indexeddb','sqlite']
  });
}
  
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LoginPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp) 
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LoginPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    DatePicker,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AgendamentoService,
    AgendamentoDao, 
    UsuarioService,
    
    { provide:Storage, useFactory:provideStorage}
  ]
})
export class AppModule {}
 