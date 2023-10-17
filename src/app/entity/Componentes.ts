export class Componentes {
  private _categoria!: string;
  private _processador!: string;
  private _placaVideo!: string;
  private _memoriaRam!: string;
  private _armazenamento!: number;
  private _color!: false;
  toLowerCase: any;
  private _id!: string;


  constructor(categoria: string, processador: string) {
    this.categoria = categoria;
    this.processador = processador;
  }

  public get categoria(): string {
    return this._categoria;
  }
  public set categoria(categoria: string) {
    this._categoria = categoria;
  }

  public get processador(): string {
    return this._processador;
  }
  public set processador(processador: string) {
    this._processador = processador;
  }

  public get placaVideo(): string {
    return this._placaVideo;
  }
  public set placaVideo(placaVideo: string) {
    this._placaVideo = placaVideo;
  }

  public get memoriaRam(): string {
    return this._memoriaRam;
  }
  public set memoriaRam(memoriaRam: string) {
    this._memoriaRam = memoriaRam;
  }

  public get armazenamento(): number {
    return this._armazenamento;
  }
  public set armazenamento(armazenamento: number) {
    this._armazenamento = armazenamento;
  }

  public get color(): false {
    return this._color;
  }
  public set color(color: false) {
    this._color = color;
  }

  public get id(): string {
    return this._id;
  }
  public set id(id: string) {
    this._id = id;
  }
}
