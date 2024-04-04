import { ApiProperty } from '@nestjs/swagger';
import { IHousing } from './../interfaces/housing.interfaces';
  
export class CreateHousingDto implements IHousing{

    
    @ApiProperty({example: '1'})
    id?: number;

    @ApiProperty({example: 'hello'})
    name: string;

    @ApiProperty({example: '123'})
    userId: string;

    

}