// packages/skill-shared/src/auth/context.ts
export interface UserInfo {
  id: string
  loginName: string
  userName: string
  employeeId: string
  departmentId: number
  departmentName: string
  positionId: number
  positionName: string
  permission: string
  companyId: number | null
  companyName: string | null
  dataPermission: string
  allPlatformId: number | null
  createdBy: string
  createdOn: string
  groupCompanyId: number
  groupCompanyName: string
  jumpType: string
  mabangLoginName: string
  mabangPassword: string
  mabangerpId: number | null
  manageAuthority: string | null
  password: string
  platformId: number | null
  roleList: unknown | null
  status: number
  teamId: number | null
}

export interface AuthContext {
  cookie: string
  userInfo: UserInfo
}
