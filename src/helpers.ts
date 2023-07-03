import { red, yellow, green, grey, blue } from '@mui/material/colors';

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

export const getColorByStatus = (status: Status): [string, string] => {
  switch (status) {
    case Status.NEED_TO_CALL:
      return ["#ffffff", green[900]]
    case Status.WAIT_FOR_RESPONSE:
      return ["#ffffff", green[700]]
    case Status.WAIT_FOR_VIEW:
      return ["#ffffff", green[500]]
    case Status.READY_TO_RENT:
      return [blue[900], yellow[500]]
    case Status.RESERVE:
      return ["#ffffff", grey[500]]
    case Status.NOT_MATCH:
      return ["#ffffff", red[900]]
    case Status.NOT_AVAILABLE:
      return ["#ffffff", red[500]]
    default:
      return ["#ffffff", red[500]]
  }
}
