import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoriasCollection: AngularFirestoreCollection<Categoria>;
  private categoria: Observable<Categoria[]>;


  constructor(db: AngularFirestore) {
    this.categoriasCollection = db.collection<Categoria>('Categoria');

    this.categoria = this.categoriasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    )
  }

  getCategorias(): Observable<Categoria[]> {
    return this.categoria;
  }

  getCategoria(id) {
    return this.categoriasCollection.doc<Categoria>(id).valueChanges();
  }

  updateCategoria(categoria: Categoria, id) {
    return this.categoriasCollection.doc(id).update(categoria);
  }

  addCategoria(categoria: Categoria) {
    return this.categoriasCollection.add({ ...categoria });
  }

  removeCategoria(id) {
    return this.categoriasCollection.doc(id).delete();
  }

}
