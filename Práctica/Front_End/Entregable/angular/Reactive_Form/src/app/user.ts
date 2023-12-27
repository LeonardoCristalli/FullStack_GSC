export interface UserI {
  id: number | null;
  nombre: string;
  apellido: string;
  email: string;
  emailCheck: string;
  tel: string;
  pw: string;
  notificaciones: boolean;
  terminos: boolean;
}

export class User implements UserI {
  constructor(
    public id: number | null,
    public nombre: string,
    public apellido: string,
    public email: string,
    public emailCheck: string,
    public tel: string,
    public pw: string,
    public notificaciones: boolean,
    public terminos: boolean
  ) {} 
}