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
import { InonAccount } from 'src/interfaces/non-account.interface';

@Entity('NonAccount')
export class NonAccountDto implements InonAccount {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'pending' })
  @Column({ length: 100 })
  fName: string;

  @ApiProperty({ example: 'pending' })
  @Column({ length: 100 })
  lName: string;

  @ApiProperty({ example: 'pending' })
  @Column({ length: 100 })
  degree: string;

  @ApiProperty({ example: 'pending' })
  @Column({ length: 100 })
  department: string;

  @ApiProperty({ example: 'pending' })
  @Column({ length: 100 })
  college: string;

  @ApiProperty({ required: false, type: () => UserDto })
  @ManyToOne(() => UserDto, (landlord) => landlord.nonAccount , {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  landlord?: UserDto;
}
