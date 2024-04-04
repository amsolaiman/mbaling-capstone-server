import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export interface IUser {
    id?: number;
    username?: string;
    password?: string;
    fName: string;
    mName?: string;
    lName: string;
    isStudent: boolean;
    email: string;
    birthdate: string;
    degree: string;
    department: string;
    college: string;
    status: 'active' | 'inactive'
}

export class RegisterUserDto implements IUser {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'Nahed' })
  @Column({ length: 100 })
  fName: string;

  @ApiProperty({ example: 'G', required: false })
  @Column({ length: 100, nullable: true })
  mName?: string;

  @ApiProperty({ example: 'Solaiman' })
  @Column({ length: 100 })
  lName: string;

  @ApiProperty({ example: 'example@gmail.com', required: false })
  @Column({ length: 100, nullable: true })
  email: string;

  @ApiProperty({ example: 'True' })
  @Column({ length: 100 })
  isStudent: boolean;

  @ApiProperty({ example: 'active' })
  @Column({ length: 100 })
  status: 'active' | 'inactive';

  @ApiProperty({ example: 'user' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ example: 'password' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ example: 'password' })
  @Column({ length: 100 })
  birthdate: string;

  @ApiProperty({ example: 'password' })
  @Column({ length: 100 })
  degree: string;

  @ApiProperty({ example: 'password' })
  @Column({ length: 100 })
  college: string;

  @ApiProperty({ example: 'password' })
  @Column({ length: 100 })
  department: string;

}

export class LoginUserDto implements IUser {

    id?: number;
    @ApiProperty()
    username?: string;
    @ApiProperty()
    password?: string;
    fName: string;
    mName?: string;
    lName: string;
    isStudent: boolean;
    email: string;
    birthdate: string;
    degree: string;
    department: string;
    college: string;
    status: 'active' | 'inactive'
}

export class RefreshDto {
  @ApiProperty({
    required: true,
    minLength: 5,
  })
  refresh_token: string;
}

export class AccessTokenDto {
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  accessToken?: string;
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  refreshToken?: string;
}

export class ChangePasswordDto {
  @ApiProperty()
  oldPassword: string;
  
  @ApiProperty()
  newPassword: string;
}

