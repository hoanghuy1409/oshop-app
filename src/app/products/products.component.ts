import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products$;
  category: string;

  constructor(route: ActivatedRoute, productService: ProductService) {
    this.products$ = productService.getAll();
  }

  ngOnInit() {}
}
