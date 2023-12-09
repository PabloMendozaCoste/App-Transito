import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: './tarifas',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'tarifas',
    loadChildren: () => import('./tarifas/tarifas.module').then( m => m.TarifasPageModule)
  },
  {
    path: 'vehiculos',
    loadChildren: () => import('./vehiculos/vehiculos.module').then( m => m.VehiculosPageModule)
  },
  {
    path: 'licencia',
    loadChildren: () => import('./licencia/licencia.module').then( m => m.LicenciaPageModule)
  },
  {
    path: 'form-multa',
    loadChildren: () => import('./form-multa/form-multa.module').then( m => m.FormMultaPageModule)
  },
  {
    path: 'multas',
    loadChildren: () => import('./multas/multas.module').then( m => m.MultasPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'horoscopo',
    loadChildren: () => import('./horoscopo/horoscopo.module').then( m => m.HoroscopoPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
