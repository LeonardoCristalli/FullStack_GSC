export interface UserI {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  emailCheck: string;
  tel: number;
  pw: string;
  notificaciones: boolean;
  terminos: boolean;
}

export class User implements UserI {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public email: string,
    public emailCheck: string,
    public tel: number,
    public pw: string,
    public notificaciones: boolean,
    public terminos: boolean
  ) {} 
}