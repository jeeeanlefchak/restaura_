import { Abstract } from './abstract';
import { Categoria } from './categoria';

export class Produto extends Abstract {
  nome: string;
  valor: number;
  descricao: string;
  ategoriaId: number;
  categoria: Categoria;
}