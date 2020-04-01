import { Component, OnInit } from '@angular/core';
import { ReqlineService } from '../reqline.service';
import { Reqline } from '../reqline';
import { RequestService } from 'src/app/request/request.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-reqline-list',
  templateUrl: './reqline-list.component.html',
  styleUrls: ['./reqline-list.component.css']
})
export class ReqlineListComponent implements OnInit {

  reqlines: Reqline[] = [];

  constructor(
    private reqline: ReqlineService,  ) { }

  ngOnInit(): void {
    this.reqline.list().subscribe(
      res => {
        this.reqlines = res;
        console.debug("Request Lines: ", res)
      },
      err => {
        console.error("Error: ", err);
      }
    );
  }

}
