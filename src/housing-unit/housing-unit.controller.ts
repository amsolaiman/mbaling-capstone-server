import { CreateHousingDto } from './housing.dto';
import { HousingDto } from './housing.entity';
import { HousingUnitService } from './housing-unit.service';
import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { UserDto } from 'src/user/user.entity';
import { PostDto } from 'src/entities/post.entity';

@Controller('housing-unit')
export class HousingUnitController {

    
    constructor(
        private housingService: HousingUnitService,
        private authService: AuthService,
      ) {}
    
      @ApiBody({ type: HousingDto })
      @ApiOperation({ summary: 'Add new post', operationId: 'AddHousingUnit' })
      @ApiResponse({ status: 200, type: HousingDto })
      @Post('/create')
      createPost(@Body() createHousingtDto: HousingDto){
        return this.housingService.createPost(createHousingtDto)
    }
    
      @ApiOperation({ summary: 'Get all housing', operationId: 'GetHousingUnit' })
      @ApiResponse({ status: 200, type: HousingDto })
      @Get()
      async findAllPost(): Promise<HousingDto[]> {
        return this.housingService.findAll();
      }

  @ApiOperation({ summary: 'Get user by id', operationId: 'GetHousingById' })
  @ApiResponse({ status: 200, type: HousingDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<HousingDto> {
    const housingunit = await this.housingService.findById(id);
    return {
      ...housingunit,
    };
  }
  
  @ApiBearerAuth()
      @UseGuards(JwtAuthGuard)
      @ApiOperation({ summary: 'Update housingname by id', operationId: 'UpdateHousingname' })
      @ApiResponse({ status: 200, type: HousingDto })
      @Put(':id')
      async updatePost(@Param('id') id: number, @Body() user: HousingDto) {
        return this.housingService.update(id, user);
      }
    
}
