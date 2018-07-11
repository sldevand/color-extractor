import { Image } from "./image.model";

export interface ImageInterface {
    id: string;
    fileName: string;
    uploaded: Array<ImageInterface>;
    results: Array<ImageInterface>;
    info: Image;
    src: string;


}