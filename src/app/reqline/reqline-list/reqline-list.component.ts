import { Component, OnInit } from '@angular/core';
import { ReqlineService } from '../reqline.service';
import { Reqline } from '../reqline';
import { RequestService } from 'src/app/request/request.service';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reqline-list',
  templateUrl: './reqline-list.component.html',
  styleUrls: ['./reqline-list.component.css']
})
export class ReqlineListComponent implements OnInit {

  reqlines: Reqline[] = [];
  requestId:number;
  request:any;

  constructor(
    private reqline: ReqlineService,  
    private route:ActivatedRoute,
    private requestsvc:RequestService

    ) { }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.params.id;
    this.requestsvc.get(this.requestId).subscribe(
      res => {
        this.request = res; 
      },
      err => { console.error("Error reading request ", err);
      }
    );
  }
}  
