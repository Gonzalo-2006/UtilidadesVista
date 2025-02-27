import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  tipoDocumento: number;
  numeroDocumento: string;
  usuarioDominio: string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = {
      tipoDocumento: this.tipoDocumento,
      numeroDocumento: this.numeroDocumento,
      usuarioDominio: this.usuarioDominio
    };

    this.http.post('http://localhost:8080/api/datos', data)
      .subscribe(response => {
        console.log('Respuesta del servidor:', response);
      }, error => {
        console.error('Error al enviar los datos:', error);
      });
  }
}
