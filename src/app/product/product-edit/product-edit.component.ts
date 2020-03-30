import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product();
  
  save(): void {
    this.productsvc.update(this.product).subscribe(
      res => {
        console.debug("Product change successful!", res);
        this.router.navigateByUrl("/product/list");
      },
      err => {
        console.error("Error updating product: ", err);
      }
    );
  }

  constructor(
    private productsvc:ProductService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        this.product = res;
        console.debug("Product: ", res)
      },
      err => {
        console.error("Error editing product ", err);
      }
    );
  }

}
