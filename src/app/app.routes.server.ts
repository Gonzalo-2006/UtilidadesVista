import { RenderMode, ServerRoute, } from '@angular/ssr';
import { AppComponent} from './app.component';


export const serverRoutes: ServerRoute [] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'registro',
    renderMode: RenderMode.Prerender
  }
];

