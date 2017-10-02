import { Component } from '@angular/core';
import { NavParams, NavController} from 'ionic-angular';
import { Acessorio } from '../../domain/carro/acessorio';
import { CadastroPage} from '../cadastro/cadastro'
import { Carro } from '../../domain/carro/carro';

@Component({
    templateUrl:'escolha.html'
})

export class EscolhaPage{

    public carro: Carro;
    public acessorios: Acessorio[];
    private _precoTotal : number;

    constructor(

        public navCtrl: NavController,
        public navParams: NavParams){

        this.carro = this.navParams.get('carroSelecionado');
        this._precoTotal = this.carro.preco

        this.acessorios = [
            new Acessorio( 'Freio ABS',800),
            new Acessorio( 'Ar-condicionado',1000),
            new Acessorio( 'MP3 Player',1000)
           
        ];

    }

   get precoTotal(){

    return this._precoTotal

   }

   atualizaTotal(ligado:boolean, acessorios:Acessorio){

        ligado?
            this._precoTotal+= acessorios.preco:
            this._precoTotal-= acessorios.preco;

   }


    // novo método 
    avancaNoAgendamento() {
        
        this.navCtrl.push(CadastroPage, {
            carro: this.carro, 
            precoTotal: this._precoTotal
        });
    }    

   
}