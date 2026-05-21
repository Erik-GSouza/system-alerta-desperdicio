import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Topbar } from '../../components/topbar/topbar';

@Component({
  selector: 'app-doacoes',
  imports: [RouterLink, Sidebar, Topbar],
  templateUrl: './doacoes.html',
  styleUrl: './doacoes.css'
})
export class Doacoes {

}