/**
 * Shared Backstage CMS types
 *
 * These types extend/re-export from @antlur/backstage for local use
 * and provide additional helper types for the starter template.
 *
 * For canonical types, import directly from @antlur/backstage:
 *   import type { Website, Page, Event } from "@antlur/backstage";
 */

// Re-export canonical types from @antlur/backstage
export type {
  Website,
  Page,
  Block,
  Settings as PageSettings,
  Meta as PageMeta,
  Event as BaseEvent,
  Location,
  Menu,
  MediaItem,
  Navigation,
  NavigationItem,
  Press,
  Route as BackstageRoute,
  Logo,
  Account,
  Theme,
  ThemeColors,
  WebsiteMeta,
  OpenGraph,
  SocialLink,
  FontFamily,
} from "@antlur/backstage";

import type { Event as BaseEvent } from "@antlur/backstage";

/**
 * Extended Event type that includes the slug property
 * The slug is used for URL routing but may not be in the base type
 */
export interface Event extends BaseEvent {
  slug?: string;
}

// =============================================================================
// Route Types (Application-specific)
// =============================================================================

/**
 * Route types supported by the RouteFactory
 */
export type RouteType = "page" | "events" | "event" | "presses" | "press";

/**
 * Route metadata including SEO information
 */
export interface RouteMeta {
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
  };
  [key: string]: unknown;
}

/**
 * Application route structure returned by route resolution
 */
export interface Route<T = unknown> {
  type: RouteType | string;
  data: T;
  meta: RouteMeta;
}

// =============================================================================
// Block Types (Application-specific extensions)
// =============================================================================

/**
 * Block tune settings for layout/spacing control
 * Used by Editor.js block tunes
 */
export interface BlockTunes {
  AlignmentTune?: {
    alignment?: "left" | "center" | "right";
  };
  SpacingTune?: {
    spacing?: "none" | "small" | "medium" | "large";
  };
  [key: string]: unknown;
}

/**
 * Extended block interface for local block components
 * Note: @antlur/backstage Block uses { id, slug, data }
 * This extends it for local block rendering with tunes support
 */
export interface LocalBlock<T = Record<string, unknown>> {
  id: string;
  block?: string; // Block type identifier (local convention)
  slug?: string; // Block type identifier (@antlur/backstage convention)
  type?: string; // Legacy support
  data: T;
  tunes?: BlockTunes;
}

// =============================================================================
// Block Component Props Helper
// =============================================================================

import type { Website, Menu, Location } from "@antlur/backstage";

/**
 * Props interface for block components
 */
export interface BlockComponentProps<T = Record<string, unknown>> {
  data: T;
  tunes?: BlockTunes;
  website?: Website;
  menus?: Menu[];
  locations?: Location[];
}

// =============================================================================
// Press/Article Types (Extended)
// =============================================================================

import type { Press } from "@antlur/backstage";

/**
 * Alias for Press type with common article naming
 */
export type PressArticle = Press;
