import { ApiProperty } from "@nestjs/swagger";
import { IPosts } from "src/interfaces/posts.interfaces";


   
export class CreatePostDto implements IPosts{

    id?: number;

    @ApiProperty({example: 'hello'})
    housingAddress: string;

    @ApiProperty({example: 'hello'})
    photo: string;
 
    @ApiProperty({example: 'hello'})
    title: string;

    @ApiProperty({example: 'hello'})
    fee: string;

    @ApiProperty({example: 0})
    prvCR: boolean;

    @ApiProperty({example: 0})
    prvKitchen: boolean;

    @ApiProperty({example: `Example Description`})
    description: string;

    @ApiProperty({example: 'example'})
    photos: string;

    @ApiProperty({example: 0})
    visibility: string;
    
    @ApiProperty({example: 'example'})
    prfphoto: number;
    
    @ApiProperty({example: 0})
    url: number;
    

    

}