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
import { MediaDto } from './media.dto';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}
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
    summary: 'Add Media',
    operationId: 'UploadMedia',
  })
  @ApiResponse({ status: 201, type: MediaDto })
  @Post('/uploadFile/:id')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.mediaService.uploadFile(file, id);
  }

  @ApiOperation({
    summary: 'Get Media by id',
    operationId: 'GetMedia',
  })
  @ApiResponse({ status: 201, type: MediaDto })
  @Get(':id')
  async downloadFile(@Param('id') id: number, @Res() res: Response) {
    const fileinfo = await this.mediaService.findOne(id);
    res.type(fileinfo.mimeType).send(Buffer.from(fileinfo.data));
  }

  @ApiOperation({ summary: 'Get all media', operationId: 'GetAllMedia' })
  @ApiResponse({ status: 200, type: MediaDto })
  @Get()
  async findAll(): Promise<MediaDto[]> {
    return this.mediaService.findAll();
  }

  @ApiOperation({
    summary: 'Delete Media by id',
    operationId: 'DeleteMedia',
  })
  @ApiResponse({ status: 200, type: MediaDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.mediaService.deleteOne(id);
  }

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
    summary: 'Update Media by id',
    operationId: 'UpdateMedia',
  })
  @ApiResponse({ status: 200, type: MediaDto })
  @Put(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.mediaService.update(id, file);
  }
}
