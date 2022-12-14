import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://lumiere-a.akamaihd.net/v1/images/iron-man_dft_m_db79b94b.jpeg"
  contentTitle:string = "Noticia Exemplo"
  contentDescription:string = "Detalhes da noticia"
  private id:string | null ="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
  }

  SetValuesToComponent(id:string){

  }

}
