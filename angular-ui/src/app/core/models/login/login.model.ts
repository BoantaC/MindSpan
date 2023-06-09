export interface LoginModel {
  username: string;
  password: string;
}

export class Login implements LoginModel {
  username = '';
  password = '';

  constructor(dto?: LoginModel) {
    if (!dto) {
      return;
    }

    this.username = dto.username;
    this.password = dto.password;
  }
}
