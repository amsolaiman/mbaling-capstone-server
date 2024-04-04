import { MediaDto } from './../media/media.dto';
import { UserDto } from 'src/user/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IPosts } from 'src/interfaces/posts.interfaces';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApplicationDto } from 'src/application/application.entity';

@Entity('post')
export class PostDto implements IPosts {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'post_id',
  })
  id?: number;

  @ApiProperty({ default: 'Example description' })
  @Column({type: 'text'})
  description: string;

  @ApiProperty({ default: '1000' })
  @Column({ length: 100 })
  fee: string;

  @ApiProperty({ default: 'false' })
  @Column('bool')
  prvCR: boolean;

  @ApiProperty({ default: 'false' })
  @Column('bool')
  prvKitchen: boolean;

  @ApiProperty({ default: 'https://cdn.quasar.dev/img/parallax1.jpg' })
  @Column({ length: 100 })
  photos: string;

  @ApiProperty({ default: 'Apartment for boyzz' })
  @Column({ length: 100 })
  title: string;

  @ApiProperty({ default: '0' })
  @Column({ length: 100 })
  visibility: string;

  @ApiProperty({ default: 'Zin-Azshari Boarding House' })
  @Column({ length: 100 })
  housingAddress: string;

  @ApiProperty({ default: '0' })
  @Column()
  url: number;

  @ApiProperty({ default: '0' })
  @Column()
  userID: number;

  @ApiProperty({ required: false, type: () => UserDto })
  @ManyToOne(() => UserDto, (user) => user.postid, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name: 'userID'})
  user?: UserDto;

  @ApiProperty({nullable: true, required: false, type: () => MediaDto })
  @OneToMany(() => MediaDto, (media) => media.postPhoto)
  media?: MediaDto;

  @OneToMany(() => ApplicationDto, (application) => application.student)
  applications?: ApplicationDto[];  
}
