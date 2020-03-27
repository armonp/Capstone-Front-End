import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  save():void {
    this.vendorsvc.create(this.vendor).subscribe(
      res => {
        console.debug("Vendor created", res);
        this.router.navigateByUrl("/vendor/list");
      },
      err => {
        console.error("Error creating vendor ", err);
      }
    );
  }

  constructor(
    private vendorsvc:VendorService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

}
