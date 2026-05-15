import { Routes } from '@angular/router';

import { Landing } from './pages/landing/landing';
import { Assinatura } from './pages/assinatura/assinatura';
import { Funcionalidades } from './pages/funcionalidades/funcionalidades';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Dashboard } from './pages/dashboard/dashboard';
import { Estoque } from './pages/estoque/estoque';
import { Alertas } from './pages/alertas/alertas';
import { Configuracoes } from './pages/configuracoes/configuracoes';
import { Doacoes } from './pages/doacoes/doacoes';
import { Alimento } from './pages/alimento/alimento';
import { Vencimentos } from './pages/vencimentos/vencimentos';

export const routes: Routes = [
  { path: '', component: Landing },

  { path: 'assinatura', component: Assinatura },
  { path: 'funcionalidades', component: Funcionalidades },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },

  { path: 'dashboard', component: Dashboard },
  { path: 'estoque', component: Estoque },
  { path: 'alertas', component: Alertas },
  { path: 'configuracoes', component: Configuracoes },
  { path: 'doacoes', component: Doacoes },
  { path: 'alimento', component: Alimento },
  { path: 'vencimentos', component: Vencimentos },

  { path: '**', redirectTo: '' }
];