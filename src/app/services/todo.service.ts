import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Produto {
  nome: string;
  valor: number;
  descricao: string;
  idCategoria: number;
}
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

  getProdutos() {
    return this.produto;
  }

  getProduto(id) {
    return this.produtosCollection.doc<Produto>(id).valueChanges();
  }

  updateProduto(Produto: Produto, id) {
    return this.produtosCollection.doc(id).update(Produto);
  }

  addProduto(Produto: Produto) {
    return this.produtosCollection.add(Produto);
  }

  removeProduto(id) {
    return this.produtosCollection.doc(id).delete();
  }

}
