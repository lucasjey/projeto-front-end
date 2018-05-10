import {Categoria} from '../../categoria/categoria';

export class Produto{
    id: number;
    nome: string;
    marca: string;
    descricao: string;
    preco: number;
    category: Categoria;
}