import { Abstract } from './abstract';
import { Categoria } from './categoria';

export class Produto extends Abstract {
  nome: string;
  valor: number;
  descricao: string;
  categoriaId: number;
  categoria: Categoria;
}