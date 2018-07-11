import { ImageInterface } from "./image-interface.model";


export class Image implements ImageInterface {
    public id: string;
    public fileName: string;
    public uploaded: Array<ImageInterface>;
    public results: Array<ImageInterface>;
    public info: Image;
    public src: string;
}