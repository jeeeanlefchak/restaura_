import { Storage } from '@ionic/storage';
import { Injectable, Inject } from '@angular/core';
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


  constructor(db: AngularFirestore, @Inject('categoria') private storgeCategoria: Storage) {
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

  // storge

  addLocalCategoria(listCategoria: Categoria[]) {
    let categorias = this.getLocal();
    if (!categorias) categorias = [];
    listCategoria.forEach(c => {
      categorias.push(c);
    });
    this.storgeCategoria.set('categoria', categorias).then();
    return categorias;
  }

  removeLocalAll(): boolean {
    this.storgeCategoria.clear().then();
    return true;
  }

  removeLocal(categoriaId: number): boolean {
    let categorias = this.getLocal();
    let index = categorias.findIndex(x => x.id == categoriaId);
    if (index >= 0) {
      categorias.splice(index, 1);
    } else {
      return null
    };
    this.storgeCategoria.set('categoria', categorias).then();
    return true;
    return true;
  }

  getLocal(): Categoria[] {
    var promise = new Promise<Categoria[]>((resolve, reject) => {
      this.storgeCategoria.get('categoria').then(categorias => {
        resolve(categorias);
      })
    })
    return promise as any;
  }

  getLocalById(categoriaId: number): Categoria {
    var promise = new Promise<Categoria>((resolve, reject) => {
      this.storgeCategoria.get('categoria').then((categorias: Categoria[]) => {
        let categoria = categorias.find(x => x.id == categoriaId)
        resolve(categoria);
      })
    })
    return promise as any;
  }
}
