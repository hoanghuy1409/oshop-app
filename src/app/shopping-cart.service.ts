import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db.list("shopping-carts").push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string) {
    return this.db.object(`shopping-cart/${cartId}`);
  }

  private async getOrCreateCart() {
    let cardId = localStorage.getItem("cardId");
    if (cardId) return cardId;

    let result = await this.create();
    localStorage.setItem("cardId", result.key);

    return result.key;
  }

  async addToCart(product: any) {
    let cartId = await this.getOrCreateCart();
    let item$ = this.db.object(`shopping-cart/${cartId}/items/${product.key}`);

    item$
      .valueChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
        if (item.exists()) item$.update({ quantity: item["quantity"] + 1 });
        else item$.set({ product: product, quantity: 1 });
      });
  }
}
