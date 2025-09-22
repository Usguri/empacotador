import { ProdutoRecebido } from '../interfaces/interface_caixas';
import { Caixa } from './tam_caixas';

export function CalculaVolumeNaCaixa(
  produto: ProdutoRecebido,
  caixaDim: Caixa['dimensoes'],
): boolean {
  // Ordena as dimensões do produto da menor para a maior
  console.log(produto);
  const prodDims = [
    produto.dimensoes.altura,
    produto.dimensoes.largura,
    produto.dimensoes.comprimento,
  ].sort((a, b) => a - b);
  // Ordena as dimensões da caixa da menor para a maior
  const caixaDims = [
    caixaDim.altura,
    caixaDim.largura,
    caixaDim.comprimento,
  ].sort((a, b) => a - b);
  // O produto cabe se cada dimensão ordenada for menor ou igual à da caixa
  return (
    prodDims[0] <= caixaDims[0] &&
    prodDims[1] <= caixaDims[1] &&
    prodDims[2] <= caixaDims[2]
  );
}
