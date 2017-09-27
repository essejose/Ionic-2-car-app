import { Component, OnInit  } from '@angular/core';


import { Carro } from '../../domain/carro/carro';

import {
  NavController,
  LoadingController,
  AlertController
} from 'ionic-angular';
import { Http } from '@angular/http';

import {EscolhaPage} from '../escolha/escolha'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit  {

  public carros :Carro[];

  constructor(
    public navCtrl: NavController,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) { }


    ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Buscando novos carros. Aguarde ...'
    });


    loader.present();

    this._http
      .get('http://www.mocky.io/v2/59cbf8a8260000a80f6b76c1')
      .map(res => res.json())
      .toPromise()
      .then(carros => {
        this.carros = carros
        loader.dismiss();
      }, err => {
        console.log(err);

        loader.dismiss();

        this._alertCtrl
          .create({
            title: 'Falha na conexão',
            message: 'error',
            buttons: [{ text: 'estou ciente' }],
            subTitle: 'Deu nao'
          }).present();

      });
  
  
    }

    seleciona(carro) {
       
          this.navCtrl.push(EscolhaPage,{carroSelecionado:carro})
    }

}
