export interface BaseContent {
  id: number;
  nombre: string;
  texto: string;
}

export interface Subcontents extends BaseContent {
  img?: Image;
  icon?: string;
}

export interface Content extends BaseContent {
  subcontents?: Subcontents[]; // Modificado de subcontent a subcontents
}

export interface ImageFormats {
  thumbnail: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  large: ImageFormat;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number; // Tamaño en KB
  sizeInBytes: number; // Tamaño en bytes
  url: string;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number; // Tamaño en KB
  url: string;
  previewUrl: string | null;
  provider: string;
}

export interface GeneralContentSolo {
  content?: Content;
  img?: Image;
}

export interface GeneralContent {
  content?: Content[];
  img?: Image;
}

export interface ApiResponse<DataType> {
  data: DataType;
  meta: Record<string, any>; // Deja 'meta' como genérico
}
