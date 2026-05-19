import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Topbar } from '../../components/topbar/topbar';

@Component({
  selector: 'app-alertas',
  imports: [RouterLink, Sidebar, Topbar],
  templateUrl: './alertas.html',
  styleUrl: './alertas.css'
})
export class Alertas {

}