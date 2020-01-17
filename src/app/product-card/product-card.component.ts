import { ShoppingCartService } from "./../shopping-cart.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent implements OnInit {
  @Input("product") product: any;
  @Input("show-action") showActions = true;
  constructor(private cartService: ShoppingCartService) {}

  addToCart(product: any) {
    // this.cartService.addToCart(product);
  }

  ngOnInit() {}
}
