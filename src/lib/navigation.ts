/** Match a complete route segment, never the shared prefix of sibling pages. */
export function isActiveNavItem(pathname: string, href: string): boolean {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}
