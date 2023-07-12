import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePostDto {
  @IsNotEmpty({ message: "Title is required" })
  @IsString()
  title: string;

  @IsNotEmpty({ message: "Content is required" })
  @IsString()
  content: string;
}

export class UpdatePostDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  content: string;
}
