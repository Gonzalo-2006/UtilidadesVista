import { Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
  {
    path: '', 
    component: AppComponent
  },
  {
    path: 'registro', 
    component: FormularioComponent
  }
];
