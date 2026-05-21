import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Topbar } from '../../components/topbar/topbar';

@Component({
  selector: 'app-vencimentos',
  imports: [RouterLink, Sidebar, Topbar],
  templateUrl: './vencimentos.html',
  styleUrl: './vencimentos.css'
})
export class Vencimentos {

}