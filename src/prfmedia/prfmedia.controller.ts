// import { Controller } from '@nestjs/common';

// @Controller('prfmedia')
// export class PrfmediaController {}
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Res,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import {
    ApiBody,
    ApiConsumes,
    ApiOperation,
    ApiResponse,
  } from '@nestjs/swagger';
  import { Response } from 'express';
import { PrfMediaDto } from './prfmedia.dto';
import { PrfmediaService } from './prfmedia.service';
  
  @Controller('prfmedia')
  export class PrfmediaController {
    constructor(private mediaService: PrfmediaService) {}
    @ApiConsumes('multipart/form-data')
    @ApiBody({
      schema: {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    })
    @ApiOperation({
      summary: 'Add Profile picture',
      operationId: 'UploadPrfMedia',
    })
    @ApiResponse({ status: 201, type: PrfMediaDto })
    @Post('/uploadFile')
    @UseInterceptors(FileInterceptor('file'))
    async upload(@UploadedFile() file: Express.Multer.File) {
      return await this.mediaService.uploadFile(file);
    }
  
    @ApiOperation({
      summary: 'Get profile image by id',
      operationId: 'GetPrfMedia',
    })
    @ApiResponse({ status: 201, type: PrfMediaDto })
    @Get(':id')
    async downloadFile(@Param('id') id: number, @Res() res: Response) {
      const fileinfo = await this.mediaService.findOne(id);
      res.type(fileinfo.mimeType).send(Buffer.from(fileinfo.data));
    }
  
    @ApiOperation({
      summary: 'Delete PrfMedia by id',
      operationId: 'DeletePrfMedia',
    })
    @ApiResponse({ status: 200, type: PrfMediaDto })
    @Delete(':id')
    async delete(@Param('id') id: number) {
      return this.mediaService.deleteOne(id);
    }
  }
  