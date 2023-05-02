export class Empresa {
  constructor(
    private _idEmpresa: number,
    private _tipoIdentificacion: string,
    private _nombre: string,
  ) {}

  public get idEmpresa(): number {
    return this._idEmpresa;
  }

  public get tipoIdentificacion(): string {
    return this._tipoIdentificacion;
  }

  public set tipoIdentificacion(value: string) {
    this._tipoIdentificacion = value;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(value: string) {
    this._nombre = value;
  }
}
