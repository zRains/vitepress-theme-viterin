// nav -----------------------------------------------------------------------

export type NavItemWithLink = {
  text: string
  link: string
  activeMatch?: string
}

export type NavItemChildren = {
  text?: string
  items: NavItemWithLink[]
}

export interface NavItemWithChildren {
  text?: string
  items: (NavItemChildren | NavItemWithLink)[]
}

export type NavItem = NavItemWithLink | NavItemWithChildren

// sidebar -------------------------------------------------------------------

export interface SidebarItem {
  text: string
  link: string
}

export interface SidebarGroup {
  text: string
  items: SidebarItem[]
  collapsible?: boolean
  isCollapsed?: boolean
}

export interface SidebarMulti {
  [path: string]: SidebarGroup[]
}

export type Sidebar = SidebarGroup[] | SidebarMulti

// edit link -----------------------------------------------------------------

export interface EditLink {
  repo: string
  branch?: string
  dir?: string
  text?: string
}

// social link ---------------------------------------------------------------

export type SocialLinkIcon = 'discord' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'slack' | 'twitter' | 'youtube'

export interface SocialLink {
  icon: SocialLinkIcon
  link: string
}
// friends link ---------------------------------------------------------------

export interface FriendLink {
  name: string
  avatar: string
  desc: string
  link: string
}

// footer --------------------------------------------------------------------

export interface Footer {
  message?: string
  copyright?: string
}

// locales -------------------------------------------------------------------

export interface LocaleLink extends SidebarItem {}

export interface LocaleLinks {
  text: string
  items: LocaleLink[]
}

// carbon ads ----------------------------------------------------------------

export interface CarbonAdsOptions {
  code: string
  placement: string
}

// VRThemeConfig ----------------------------------------------------------------

export interface VRThemeConfig {
  logo?: string
  siteTitle?: string | false
  nav?: NavItem[]
  sidebar?: Sidebar
  editLink?: EditLink
  lastUpdatedText?: string
  socialLinks?: SocialLink[]
  friendLinks?: FriendLink[]
  footer?: Footer
  localeLinks?: LocaleLinks
  carbonAds?: CarbonAdsOptions
}
