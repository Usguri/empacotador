import { Injectable } from '@nestjs/common';
import {
  CaixaResultado,
  ProdutoRecebido,
} from '../interfaces/interface_caixas';
import { CaixasDisponiveis } from './tam_caixas';
import { CalculaVolumeNaCaixa } from './calcula_volume';

@Injectable()
export class OrderPackerService {
  public pack(produtos: ProdutoRecebido[]): CaixaResultado[] {
    const produtosOrdenados = [...produtos].sort(
      (a, b) =>
        b.dimensoes.altura * b.dimensoes.largura * b.dimensoes.comprimento -
        a.dimensoes.altura * a.dimensoes.largura * a.dimensoes.comprimento,
    );

    const caixasUsadas: CaixaResultado[] = [];

    produtosOrdenados.forEach((produto) => {
      let produtoEmpacotado = false;
      for (const caixa of caixasUsadas) {
        const tipoCaixa = CaixasDisponiveis.find(
          (c) => c.name === caixa.caixa_id,
        );

        if (tipoCaixa && CalculaVolumeNaCaixa(produto, tipoCaixa.dimensoes)) {
          caixa.produtos.push(produto.produto_id);
          produtoEmpacotado = true;
          break;
        }
      }
      // ---------------------------- \\
      if (!produtoEmpacotado) {
        for (const tipoCaixa of CaixasDisponiveis) {
          if (CalculaVolumeNaCaixa(produto, tipoCaixa.dimensoes)) {
            caixasUsadas.push({
              caixa_id: tipoCaixa.name,
              produtos: [produto.produto_id],
            });
            produtoEmpacotado = true;
            break;
          }
        }
      }
    });

    return caixasUsadas;
  }
}
