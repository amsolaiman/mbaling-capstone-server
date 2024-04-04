import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { ApplicationDto } from './application.entity';
import { ApplicationService } from './application.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('application')
export class ApplicationController {
  constructor(private applicationService: ApplicationService) {}

  @ApiBody({ type: ApplicationDto })
  @ApiOperation({ summary: 'Add new application', operationId: 'AddApplication' })
  @ApiResponse({ status: 200, type: ApplicationDto })
  @Post()
  async create(@Body() job: ApplicationDto): Promise<ApplicationDto> {
    return this.applicationService.create(job);
  }

  @ApiOperation({ summary: 'Get all application', operationId: 'GetApplications' })
  @ApiResponse({ status: 200, type: ApplicationDto })
  @Get()
  async findAll(): Promise<ApplicationDto[]> {
    return this.applicationService.findAll();
  }

  @ApiOperation({ summary: 'Get application by id', operationId: 'GetApplicationById' })
  @ApiResponse({ status: 200, type: ApplicationDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ApplicationDto> {
    return this.applicationService.findOne(id);
    
  }

  @ApiOperation({ summary: 'Update application by id', operationId: 'UpdateApplication' })
  @ApiResponse({ status: 200, type: ApplicationDto })
  @Put(':id')
  async update(@Param('id') id: number, @Body() job: ApplicationDto) {
    return this.applicationService.update(id, job);
  }

  @ApiOperation({ summary: 'Delete application by id', operationId: 'DeleteApplication' })
  @ApiResponse({ status: 200, type: ApplicationDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.applicationService.deleteOne(id);
  }
}
