import { IsNotEmpty } from 'class-validator';

export class LogoutDto {
  @IsNotEmpty({ message: 'Refresh token không được để trống' })
  refreshToken: string;

  @IsNotEmpty({ message: 'ID không được để trống' })
  id: string;
}
