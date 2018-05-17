
import { Category } from '../category/category';

export class Produto{
    id: number;
    nome: string;
    marca: string;
    descricao: string;
    preco: number;
    category: Category;
}