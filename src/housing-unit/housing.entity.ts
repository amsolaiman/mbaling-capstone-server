import { UserDto } from 'src/user/user.entity';
import { IHousing } from './../interfaces/housing.interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/interfaces/users.interfaces'; 
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class HousingDto implements IHousing {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'housing_id'
  })
  id?: number;

  
  @ApiProperty({ default: 'Nahed' })
  @Column({ length: 100 })
  name: string;

  @ApiProperty({nullable: true, required: false, type: () => UserDto })
  @OneToMany(() => UserDto, user => user.housing)
  user?: UserDto

}
