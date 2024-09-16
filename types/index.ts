export type { Video };

declare global {
  interface  Video {
    id: number;
    title: string;
    src: string;   
  }
}