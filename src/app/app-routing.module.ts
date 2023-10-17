import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./view/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'cadastro',
    loadChildren: () =>
      import('./view/cadastro/cadastro.module').then(
        (m) => m.CadastroPageModule
      ),
  },

  {
    path: 'excluir',
    loadChildren: () =>
      import('./view/excluir/excluir.module').then((m) => m.ExcluirPageModule),
  },

  {
    path: 'cadastrado',
    loadChildren:()=>
    import('./view/cadastrado/cadastrado.module').then((m) => m.CadastradoPageModule)

  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
