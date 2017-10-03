import { Injectable } from '@angular/core'
import { Agendamento } from '../agendamento/agendamento'
import { Storage } from '@ionic/storage'


@Injectable()
export class AgendamentoDao{
    constructor(
        private _getKey: Agendamento,
        private _storage: Storage
    ){}
 
}