import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})

export class NovaTranferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  tranferir() {
    console.log('Solicitando transferência...')
    this.aoTransferir.emit({
      valor: this.valor,
      destino: this.destino
    })

    this.limparCampos()
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
