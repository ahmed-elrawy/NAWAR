import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  data: any
  constructor(private appServices: AppService) {
    
  }

  ngOnInit(): void {
    this.appServices.Phones().subscribe(res =>{ console.log(res); this.data=res} )
  }

}
