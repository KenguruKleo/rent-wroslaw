export enum Status {
  NEED_TO_CALL = 'NEED_TO_CALL',
  WAIT_FOR_RESPONSE = 'WAIT_FOR_RESPONSE',
  WAIT_FOR_VIEW = 'WAIT_FOR_VIEW',
  READY_TO_RENT = 'READY_TO_RENT',
  NOT_MATCH = 'NOT_MATCH',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
  RESERVE = 'RESERVE'
} 

export const availableStauses = [
  Status.NEED_TO_CALL,
  Status.WAIT_FOR_RESPONSE,
  Status.WAIT_FOR_VIEW,
  Status.READY_TO_RENT,
  Status.RESERVE,
]

export const likedStauses = [
  Status.NEED_TO_CALL,
  Status.WAIT_FOR_RESPONSE,
  Status.WAIT_FOR_VIEW,
]

export const isAvailable = (status: Status): boolean => {
  return availableStauses.includes(status)
}

export const isLikedStatus = (status: Status): boolean => {
  return likedStauses.includes(status)
}
