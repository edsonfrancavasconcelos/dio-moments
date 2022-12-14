import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';



import { environment } from 'src/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoments:Moment []=[]
  moments:Moment []=[]
  baseApiUrl=environment.baseApiUrl

  //todo search

  constructor(private momentService:MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items)=>{
      const data = items.data

      data.map((item)=> {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-br');
      });

      this.allMoments=data
      this.moments = data
    });


   }


  }

