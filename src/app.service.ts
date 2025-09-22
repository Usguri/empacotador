import { Injectable } from '@nestjs/common';
import { OrdemPedidos } from './data_transfer_objecto/ordem_produtos';
import { OrderPackerService } from './helpers/order_pack.helper';
import {
  CaixaResultado,
  ResultadoAllPedidos,
} from './interfaces/interface_caixas';

@Injectable()
export class AppService {
  constructor(private readonly orderPackerService: OrderPackerService) {}

  packOrders(orders: OrdemPedidos[]): ResultadoAllPedidos[] {
    return orders.map((order) => {
      const caixasDoPedido: CaixaResultado[] = this.orderPackerService.pack(
        order.produtos,
      );

      if (caixasDoPedido.length === 0 && order.produtos.length > 0) {
        return {
          pedido_id: order.pedido_id,
          caixas: [
            {
              caixa_id: null,
              produtos: order.produtos.map((p) => p.produto_id),
              observacao: 'Produto não cabe em nenhuma caixa disponível.',
            },
          ],
        };
      }

      return {
        pedido_id: order.pedido_id,
        caixas: caixasDoPedido,
      };
    });
  }
}
