import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  listaTranferencia: any[];

  constructor() {
    this.listaTranferencia = [];
  }

  get transferencias() {
    return this.listaTranferencia;
  }

  addTransferencia(transferencia: any) {
    this.hidratar(transferencia)

    this.listaTranferencia.push(transferencia)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date()

  }
}
