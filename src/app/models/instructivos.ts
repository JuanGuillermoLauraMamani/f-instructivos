export interface Instructivo {
    id_instructivo: number;
    nombre: string;
    version: number;
    vigencia: boolean;
    fecha_inicio: string;
    fecha_fin: string;
    ruta_pdf_original: string;
    ruta_pdf_escaneado: string;
}