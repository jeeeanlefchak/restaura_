import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtosCollection: AngularFirestoreCollection<Produto>;
  private produto: Observable<Produto[]>;


  constructor(db: AngularFirestore) {
    this.produtosCollection = db.collection<Produto>('Produto');

    this.produto = this.produtosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    )
  }

  getProdutos(): Observable<Produto[]> {
    return this.produto;
  }

  getProduto(id) {
    return this.produtosCollection.doc<Produto>(id).valueChanges();
  }

  updateProduto(produto: Produto, id) {
    return this.produtosCollection.doc(id).update(produto);
  }

  addProduto(produto: Produto) {
    return this.produtosCollection.add({ ...produto });
  }

  removeProduto(id) {
    return this.produtosCollection.doc(id).delete();
  }

}
