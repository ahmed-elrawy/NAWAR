import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';




export interface phone {
  img: Img
  _id: string
  userID: string
  name: string
  desc: string
  ip: string
  model: string
  color: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Img {
  data: string
  contentType: string
}



@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})


export class AdminPanelComponent implements OnInit {
data?: phone[]

  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.app.Phones().subscribe(res=> {
      this.data= res
      console.log(res);
      
    })
  }
delete(id:string) {
  console.log(id);

  this.app.delete(id).subscribe(res => {
    
    alert(res)
  })
}


}
