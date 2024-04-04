// import { Controller } from '@nestjs/common';

// @Controller('non-account')
// export class NonAccountController {}
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { NonAccountDto } from './non-account.entity';
import { NonAccountService } from './non-account.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('nonAccount')
export class NonAccountController {
  constructor(private nonAccountService: NonAccountService) {}

  @ApiBody({ type: NonAccountDto })
  @ApiOperation({ summary: 'Add new nonAccount', operationId: 'AddNonAccount' })
  @ApiResponse({ status: 200, type: NonAccountDto })
  @Post()
  async create(@Body() job: NonAccountDto): Promise<NonAccountDto> {
    return this.nonAccountService.create(job);
  }

  @ApiOperation({ summary: 'Get all nonAccount', operationId: 'GetNonAccount' })
  @ApiResponse({ status: 200, type: NonAccountDto })
  @Get()
  async findAll(): Promise<NonAccountDto[]> {
    return this.nonAccountService.findAll();
  }

  @ApiOperation({ summary: 'Get nonAccount by id', operationId: 'GetNonAccountId' })
  @ApiResponse({ status: 200, type: NonAccountDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<NonAccountDto> {
    return this.nonAccountService.findOne(id);
    
  }

  @ApiOperation({ summary: 'Update nonAccount by id', operationId: 'UpdateNonAccount' })
  @ApiResponse({ status: 200, type: NonAccountDto })
  @Put(':id')
  async update(@Param('id') id: number, @Body() job: NonAccountDto) {
    return this.nonAccountService.update(id, job);
  }

  @ApiOperation({ summary: 'Delete nonAccount by id', operationId: 'DeleteNonAccount' })
  @ApiResponse({ status: 200, type: NonAccountDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.nonAccountService.deleteOne(id);
  }
}
