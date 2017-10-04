import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,Alert } from 'ionic-angular';
//import { Http } from '@angular/http';

// importou o tipo Carro para tiparmos a propriedade carro que guarda um objeto do tipo Carro
import { Carro } from '../../domain/carro/carro';
import { Agendamento } from '../../domain/agendamento/agendamento'
import { HomePage} from '../home/home'
import { AgendamentoService } from '../../domain/agendamento/agendamento-service'
import { Vibration } from '@ionic-native/vibration';


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;
 
  public agendamento: Agendamento;

  private _alerta: Alert;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _alertCtrl : AlertController,
    private _service: AgendamentoService,
    private vibration: Vibration
  ) {

    this.carro = navParams.get('carro');
    this.precoTotal = navParams.get('precoTotal');
      
    this.agendamento = new Agendamento(this.carro, this.precoTotal)

  }

 
  agenda() {


    if(!this.agendamento.email  || !this.agendamento.endereco || !this.agendamento.nome){

      this.vibration.vibrate(1000);
      
      this._alerta = this._alertCtrl.create({
        title:'Aviso',
        subTitle:'Voce deve preencher tudo',
        buttons:[{text:'Ok'}]
      })

      this._alerta.present();

      return

    }

      this._service.agenda(this.agendamento) 
      .then(agendamento =>{  
          
       
        agendamento ?
          this._alerta = this._alertCtrl.create({
            title:'Aviso',
            subTitle:'Agendamento sucesso',
            buttons:[{
              text:'Ok', 
              handler: () => { 
                this.navCtrl.setRoot(HomePage)
              }
            }]
          }) :
          
          this._alerta = this._alertCtrl.create({
            title:'Aviso',
            subTitle:'Nao foi possivel',
            buttons:[{
              text:'Ok', 
              handler: () => { 
                this.navCtrl.setRoot(HomePage)
              }
            }]
          });
          this._alerta.present();
       

        }).catch(err => {
         
             console.log(err)

             this._alerta = this._alertCtrl.create({
              title:'Aviso',
              subTitle:err.message,
              buttons:[{
                text:'Ok', 
                handler: () => { 
                //  this.navCtrl.setRoot(HomePage)
                }
              }]
            });
            this._alerta.present();
          })
      

    }


}
