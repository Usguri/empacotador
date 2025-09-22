import { ApiProperty } from '@nestjs/swagger';

class DimensoesDto {
  @ApiProperty()
  altura: number;

  @ApiProperty()
  largura: number;

  @ApiProperty()
  comprimento: number;
}

export class ProdutoDto {
  @ApiProperty()
  produto_id: string;

  @ApiProperty({ type: DimensoesDto })
  dimensoes: DimensoesDto;
}

export class OrdemPedidos {
  @ApiProperty()
  pedido_id: number;

  @ApiProperty({ type: [ProdutoDto] })
  produtos: ProdutoDto[];
}

export class PedidosWrapper {
  @ApiProperty({ type: [OrdemPedidos] })
  pedidos: OrdemPedidos[];
}
