import { ConsultaCepService } from '../../../../shared/services/consulta-cep-service';
import { EstadoBr } from '../../../../shared/models/estado-br-model';
import { DropdownService } from '../../../../shared/services/dropdow.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Carrinho } from '../carrinho';
import { CarrinhoService } from '../carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fecharCarrinho',
  templateUrl: './fecharCarrinho.component.html',
  styleUrls: ['./fecharCarrinho.component.css']
})
export class FecharCarrinhoComponent implements OnInit {
  formulario: FormGroup;
  estados: EstadoBr[];
  carrinho: Carrinho;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private carrinhoService: CarrinhoService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.dropdownService.getEstadosBr().subscribe(dados => {
      this.estados = dados;
      console.log(dados);
    });

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      cpf: [null, Validators.required],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });

    // tslint:disable-next-line:max-line-length
    // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    // [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
  }

  onSubmit() {
    // console.log(this.formulario);

    // if (this.formulario.valid) {
    //   this.http
    //     .post('${URI_SERVER_API}/carrinho/', JSON.stringify(this.formulario.value))
    //     .map(res => res)
    //     .subscribe(
    //       dados => {
    //         console.log(dados);
    //         // reseta o form
    //         // this.formulario.reset();
    //         // this.resetar();
    //       },
    //       (error: any) => alert('erro')
    //     );
    // } else {
    //   console.log('formulario invalido');
    //   this.verificaValidacoesForm(this.formulario);
    // }
  }

  save(carrinho : Carrinho) {
    if(this.formulario.valid) {
        this.carrinhoService.save(carrinho).subscribe(dados => {
            this.router.navigate(['/carrinho/list']);
            console.log('ta salvando');
        })
    } 
}

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }






  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;
    this.cepService.consultaCEP(cep, this.resetaDadosForm, this.formulario)
      .subscribe(dados => this.populaDadosForm(dados));
  }

  populaDadosForm(dados) {
    //this.formulario.setValue({});
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    

    // console.log(form);
  }

  resetaDadosForm(formulario) {
    formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}