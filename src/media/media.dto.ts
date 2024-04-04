import { PostDto } from 'src/entities/post.entity';

import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Media } from './media.interface';

@Entity('photos')
export class MediaDto implements Media {
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

  @ApiProperty({ required: false, nullable: true })
  @Column({nullable:true})
  postPhotoID: string;

  @ApiProperty({required: false, type: () => PostDto })
  @ManyToOne(() => PostDto, (postPhoto) => postPhoto.media,{
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name: "postPhotoID"})
  postPhoto?: PostDto;
}
