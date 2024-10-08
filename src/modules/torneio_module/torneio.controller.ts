import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { TorneioService } from './torneio.service';

@Controller('torneios')
export class TorneioController {
  constructor(private readonly torneioService: TorneioService) {}

  @Post()
  create(
    @Body('nome') nome: string,
    @Body('data_abertura') dataAbertura: Date,
    @Body('data_encerramento') dataEncerramento?: Date,
  ) {
    return this.torneioService.create(nome, dataAbertura, dataEncerramento);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.torneioService.findOne(id);
  }

  @Get()
  findAll() {
    return this.torneioService.findAll();
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: number) {
    return this.torneioService.findByUserId(userId);
  }

  @Get(':id/tabela')
  async getTabela(@Param('id') torneioId: number, @Query('userId') userId: number) {
    return this.torneioService.getTabelaUsuario(userId, torneioId);
  }

  @Get(':id/participantes')
  findParticipantes(@Param('id') id: number) {
    return this.torneioService.findParticipantes(id);
  }

  @Post('ingressar')
  ingressarNoTorneio(
    @Body('codigo_acesso') codigoAcesso: string,
    @Body('usuario_id') usuarioId: number,
  ) {
    return this.torneioService.ingressarNoTorneio(codigoAcesso, usuarioId);
  }

  @Post(':id/soltar-rodada')
  soltarRodada(@Param('id') torneioId: number) {
    return this.torneioService.soltarRodada(torneioId);
  }

  @Get('user/:userId/detalhes')
  async getDetalhesPorUsuario(@Param('userId') userId: number) {
    return this.torneioService.getDetalhesPorUsuario(userId);
  }
}
