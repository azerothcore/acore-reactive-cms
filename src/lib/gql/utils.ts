export function isRestrictedContent(content: string): boolean {
  return content.includes('members-access-error')
}
