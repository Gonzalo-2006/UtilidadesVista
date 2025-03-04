import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; // Importa NgForm

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  tipoDocumento: number = 0;
  numeroDocumento: string = "";
  usuarioDominio: string = "";

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return; 
    }

    const data = {
      tipoDocumento: this.tipoDocumento,
      numeroDocumento: this.numeroDocumento,
      usuarioDominio: this.usuarioDominio
    };

    this.http.post('http://127.0.0.1:8085', data)
      .subscribe(response => {
        console.log('Respuesta del servidor:', response);
      }, error => {
        console.error('Error al enviar los datos:', error);
      });
  }
}