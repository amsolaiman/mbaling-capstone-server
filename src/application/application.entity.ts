import { PostDto } from 'src/entities/post.entity';
import { UserDto } from 'src/user/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IApplication } from 'src/interfaces/application.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Application')
export class ApplicationDto implements IApplication {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'pending' })
  @Column({ length: 100 })
  status: string;
  
  @ApiProperty({ required: false, type: () => UserDto })
  @OneToOne(() => UserDto, (student) => student.studentApplication , {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  student?: UserDto;

  @ApiProperty({ required: false, type: () => UserDto })
  @ManyToOne(() => UserDto, (landlord) => landlord.landlordApplication , {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  landlord?: UserDto;
}
