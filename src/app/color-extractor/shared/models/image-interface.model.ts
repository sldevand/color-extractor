import { Image } from "./image.model";

export interface ImageInterface {
    id: string;
    filename: string;
    uploaded: Array<ImageInterface>;
    results: Array<ImageInterface>;
    info: Image;
    src: string;
}