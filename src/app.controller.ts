import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import {
  OrdemPedidos,
  PedidosWrapper,
} from './data_transfer_objecto/ordem_produtos';

@ApiTags('Orders')
@Controller('orders')
export class AppController {
  [x: string]: any;
  constructor(private readonly appservice: AppService) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Post('pack')
  @ApiOperation({
    summary: 'Empacotar pedidos',
    description: 'Endpoint para processar e empacotar uma lista de pedidos',
  })
  @ApiResponse({
    status: 200,
    description: 'Pedidos empacotados com sucesso',
  })
  @ApiResponse({
    status: 401,
    description: 'Token de autenticação inválido ou não fornecido',
  })
  packOrder(@Body() body: PedidosWrapper[]) {
    const orders: OrdemPedidos[] = body.flatMap((item) => item.pedidos);
    return this.appservice.packOrders(orders);
  }
}
