import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Topbar } from '../../components/topbar/topbar';

@Component({
  selector: 'app-alimento',
  imports: [RouterLink, Sidebar, Topbar],
  templateUrl: './alimento.html',
  styleUrl: './alimento.css'
})
export class Alimento {

}