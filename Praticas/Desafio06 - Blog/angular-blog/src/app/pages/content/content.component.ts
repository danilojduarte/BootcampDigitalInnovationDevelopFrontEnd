import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://lumiere-a.akamaihd.net/v1/images/iron-man_dft_m_db79b94b.jpeg"
  contentTitle:string = "Noticia Exemplo"
  contentDescription:string = "Detalhes da noticia"

  constructor() { }

  ngOnInit(): void {
  }

}
