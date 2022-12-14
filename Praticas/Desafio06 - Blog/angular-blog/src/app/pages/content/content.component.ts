import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = "Detalhes da noticia"
  private id:string | null ="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.SetValuesToComponent(this.id)
  }

  SetValuesToComponent(id:string | null){
    const result = dataFake.filter( article => article.id.toString() == id )[0]
      
    this.contentTitle = result.title
    this.contentDescription = result.descrition
    this.photoCover = result.photoCover
      
    
  }

}
