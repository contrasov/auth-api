import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsDateString, Matches } from "class-validator";

export class RegisterDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;
    @ApiProperty()
    @IsNotEmpty()
    username: string;
    @ApiProperty()
    @IsNotEmpty()
    email: string;
    @ApiProperty({example: '1998-04-23'})
    @IsNotEmpty()
    @IsDateString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'A data deve estar no formato YYYY-MM-DD',
    })
    dateBirth: Date;
    @ApiProperty()
    @IsNotEmpty()
    phone: string;
    @ApiProperty({ required: false })
    @IsOptional()
    note: string;
}