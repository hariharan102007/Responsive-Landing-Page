export type NavbarTheme = 'glass' | 'obsidian' | 'minimal' | 'cobalt' | 'emerald';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface TaskRequirement {
  id: string;
  title: string;
  description: string;
  status: 'passed' | 'active';
  codeRef: string;
}
