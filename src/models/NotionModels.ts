export interface ObjectId {
  id: string
  object: string
}

export interface Icon {
  type: string
  emoji: string
}

export interface Parent {
  type: 'database_id'
  database_id: string
}

export interface NotionModel {
  object: 'string'
  id: 'string'
  created_time: Date
  last_edited_time: Date
  created_by: ObjectId
  last_edited_by: ObjectId
  cover: null | any
  icon: Icon
  parent: Parent
  archived: boolean
  url: string
}
