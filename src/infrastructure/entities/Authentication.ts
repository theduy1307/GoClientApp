export interface Menu {
  id: string
  name: string
  icon?: string
  url?: string
  parentId: string
  subMenus: Menu[]
}
