// Room style options, copied from huawei-2026/src/app/types/roomStyle.ts (minus the app's
// localStorage helpers). The ids below are what src/content/team.ts uses for each room.

export const WALL_COLORS = [
  { id: 'auto', name: 'Match avatar', color: '' },
  { id: 'midnight', name: 'Midnight', color: '#101b32' },
  { id: 'violet', name: 'Violet', color: '#211733' },
  { id: 'lagoon', name: 'Lagoon', color: '#0c292e' },
  { id: 'rose', name: 'Rose', color: '#301729' },
  { id: 'forest', name: 'Forest', color: '#12291f' },
] as const;
export const WALL_PATTERNS = [
  { id: 'grid', name: 'Pixel grid' }, { id: 'plain', name: 'Solid' },
  { id: 'stripes', name: 'Stripes' }, { id: 'stars', name: 'Pixel stars' },
  { id: 'brick', name: 'Brick' }, { id: 'hex', name: 'Honeycomb' },
  { id: 'circuit', name: 'Circuit' },
] as const;
export const FLOORS = [
  { id: 'original', name: 'Original', color: '' },
  { id: 'oak', name: 'Dark oak', color: '#3c2d32' },
  { id: 'tile', name: 'Slate tiles', color: '#273348' },
  { id: 'checker', name: 'Arcade checks', color: '#302342' },
  { id: 'carpet', name: 'Soft carpet', color: '#253d43' },
  { id: 'concrete', name: 'Concrete', color: '#2c2f36' },
  { id: 'neon', name: 'Neon grid', color: '#0d1f2e' },
  { id: 'metal', name: 'Brushed metal', color: '#33383f' },
] as const;
export const ROOM_LIGHTS = [
  { id: 'auto', name: 'Match avatar', color: '' },
  { id: 'mint', name: 'Mint', color: '#4ecdc4' },
  { id: 'green', name: 'Electric green', color: '#00ff88' },
  { id: 'pink', name: 'Hot pink', color: '#ff71c5' },
  { id: 'purple', name: 'Lilac', color: '#c77dff' },
  { id: 'gold', name: 'Gold', color: '#ffe66d' },
] as const;

export type RoomStyle = {
  name: string;
  wall: typeof WALL_COLORS[number]['id'];
  pattern: typeof WALL_PATTERNS[number]['id'];
  floor: typeof FLOORS[number]['id'];
  light: typeof ROOM_LIGHTS[number]['id'];
  glow: boolean;
};
export const DEFAULT_ROOM_STYLE: RoomStyle = {
  name: '', wall: 'auto', pattern: 'grid', floor: 'original', light: 'auto', glow: false,
};

export function roomColors(style: RoomStyle, background: string, accent: string) {
  return {
    wall: WALL_COLORS.find(option => option.id === style.wall)?.color || background,
    light: ROOM_LIGHTS.find(option => option.id === style.light)?.color || accent,
    floor: FLOORS.find(option => option.id === style.floor)?.color || background,
  };
}
