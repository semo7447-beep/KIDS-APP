export type ColoringRegion =
  | { id: string; shape: 'rect'; x: number; y: number; width: number; height: number; rx?: number }
  | { id: string; shape: 'circle'; cx: number; cy: number; r: number }
  | { id: string; shape: 'ellipse'; cx: number; cy: number; rx: number; ry: number }
  | { id: string; shape: 'polygon'; points: string };

export type ColoringTemplate = {
  id: string;
  number: number;
  titleAr: string;
  titleEn: string;
  viewBox: string;
  regions: ColoringRegion[];
};
