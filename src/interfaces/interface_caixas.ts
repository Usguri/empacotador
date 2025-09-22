export interface CaixaResultado {
  caixa_id: string | null;
  produtos: (string | number)[];
  observacao?: string;
}

export interface ResultadoAllPedidos {
  pedido_id: number;
  caixas: CaixaResultado[];
}

export interface ProdutoRecebido {
  produto_id: string;
  dimensoes: {
    altura: number;
    largura: number;
    comprimento: number;
  };
}
