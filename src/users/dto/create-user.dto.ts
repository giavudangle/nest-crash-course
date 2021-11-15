import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsAlphanumeric, MaxLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsAlpha()
    @MaxLength(20)
    name : string;

}