// Room style options, copied from huawei-2026/src/app/types/roomStyle.ts (minus the app's
// localStorage helpers). The ids below are what src/content/about.ts uses for each room.

/*
 * DAY AND NIGHT ROOMS (as in the app: notes/previews/2026-11-06-day-rooms-proposal, option C)
 * Every wall and floor has a night colour (`color`) and a pale day twin (`day`). A room's
 * `lighting` picks which one it shows:
 *   'auto' (the default)  day in the light theme, night in the dark theme
 *   'day' / 'night'       always that, in both themes
 * ROOM_LIGHTING_MODE turns this off the same way as in the app:
 *   'choice'  each room's `lighting` counts (option C)
 *   'theme'   every room follows the theme, whatever its `lighting` says (option B)
 *   'night'   every room is the neon night scene, as before (option A)
 */
export const ROOM_LIGHTING_MODE = 'choice' as 'choice' | 'theme' | 'night';

export const ROOM_LIGHTING = [
  { id: 'auto', name: 'Auto' },
  { id: 'day', name: 'Day' },
  { id: 'night', name: 'Night' },
] as const;
export type RoomTime = 'day' | 'night';

export const WALL_COLORS = [
  { id: 'auto', name: 'Match avatar', color: '', day: '' },
  { id: 'midnight', name: 'Midnight', color: '#101b32', day: '#dde6f4' },
  { id: 'violet', name: 'Violet', color: '#211733', day: '#ebe3f6' },
  { id: 'lagoon', name: 'Lagoon', color: '#0c292e', day: '#d9efec' },
  { id: 'rose', name: 'Rose', color: '#301729', day: '#f6e2ec' },
  { id: 'forest', name: 'Forest', color: '#12291f', day: '#dfeee3' },
] as const;
export const WALL_PATTERNS = [
  { id: 'grid', name: 'Pixel grid' }, { id: 'plain', name: 'Solid' },
  { id: 'stripes', name: 'Stripes' }, { id: 'stars', name: 'Pixel stars' },
  { id: 'brick', name: 'Brick' }, { id: 'hex', name: 'Honeycomb' },
  { id: 'circuit', name: 'Circuit' },
] as const;
export const FLOORS = [
  { id: 'original', name: 'Original', color: '', day: '' },
  { id: 'oak', name: 'Dark oak', color: '#3c2d32', day: '#c9a47e' },
  { id: 'tile', name: 'Slate tiles', color: '#273348', day: '#c4cfdd' },
  { id: 'checker', name: 'Arcade checks', color: '#302342', day: '#d7cce7' },
  { id: 'carpet', name: 'Soft carpet', color: '#253d43', day: '#bad7d3' },
  { id: 'concrete', name: 'Concrete', color: '#2c2f36', day: '#c9cdd3' },
  { id: 'neon', name: 'Neon grid', color: '#0d1f2e', day: '#d3e4ee' },
  { id: 'metal', name: 'Brushed metal', color: '#33383f', day: '#c5cbd3' },
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
  /** Day, night, or (auto, the default) whatever the visitor's theme is. */
  lighting?: typeof ROOM_LIGHTING[number]['id'];
};
export const DEFAULT_ROOM_STYLE: RoomStyle = {
  name: '', wall: 'auto', pattern: 'grid', floor: 'original', light: 'auto', glow: false, lighting: 'auto',
};

/** Day or night: what this room shows to a visitor on `theme` (see ROOM_LIGHTING_MODE). */
export function roomTime(style: { lighting?: RoomStyle['lighting'] } | undefined, theme: 'light' | 'dark'): RoomTime {
  if (ROOM_LIGHTING_MODE === 'night') return 'night';
  const lighting = ROOM_LIGHTING_MODE === 'choice' ? style?.lighting ?? 'auto' : 'auto';
  if (lighting === 'day' || lighting === 'night') return lighting;
  return theme === 'light' ? 'day' : 'night';
}

/** The "Match avatar" wall in daylight: a pale tint of the member's colour. */
export function dayWall(accent: string) {
  return `color-mix(in srgb, ${accent} 14%, #f7f9fc)`;
}

/** The room's wall, floor and neon colours. `time` picks the night colours or their day twins. */
export function roomColors(style: RoomStyle, background: string, accent: string, time: RoomTime = 'night') {
  const day = time === 'day';
  const wall = WALL_COLORS.find(option => option.id === style.wall);
  const floor = FLOORS.find(option => option.id === style.floor);
  const base = day ? dayWall(accent) : background;
  return {
    wall: (day ? wall?.day : wall?.color) || base,
    light: ROOM_LIGHTS.find(option => option.id === style.light)?.color || accent,
    floor: (day ? floor?.day : floor?.color) || base,
  };
}
