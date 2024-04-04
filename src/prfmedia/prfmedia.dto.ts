
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IPrfMedia } from 'src/interfaces/prfmedia.interfaces';

@Entity('profileImage')
export class PrfMediaDto implements IPrfMedia {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty()
  @Column()
  mimeType: string;

  @ApiProperty({ required: false })
  @Column()
  filename: string;

  @Column({
    type: 'mediumblob',
  })
  data: Uint8Array;
}
