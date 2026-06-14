export type ActionResult<T = void> =
  | { success: true; data: T }
  | { success: false; error: string }

export type EquipmentType = "lavadora" | "secadora"

export type ContactStatus =
  | "PENDING"
  | "CONTACTED"
  | "SCHEDULED"
  | "COMPLETED"
  | "CANCELLED"
