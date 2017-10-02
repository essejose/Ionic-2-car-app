import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// importou o tipo Carro para tiparmos a propriedade carro que guarda um objeto do tipo Carro
import { Carro } from '../../domain/carro/carro';



@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;

  
  public nome: string;
  public endereco: string;
  public email: string;
  public data: string  = new Date().toISOString();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _http: Http ) {

    this.carro = navParams.get('carro');
    this.precoTotal = navParams.get('precoTotal');

  }

  agenda() {

      this._http .get(`https://aluracar.herokuapp.com/salvarpedido?carro=${this.carro.nome}&nome=${this.nome}&preco=${this.precoTotal}&endereco=${this.endereco}&email=${this.email}&dataAgendamento=${this.data}`)
      .toPromise()
      .then(() => alert('Agendou'))
      .catch(erro => alert('Falha'));
      }


}
