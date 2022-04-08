import { toast } from 'react-toastify'

export const notificationMessage = (type, message) => {
  toast.configure({
    autoClose: 3000,
    draggable: false,
    position: 'top-center',
    hideProgressBar: true
  })

  toast[type](message)

  return `${type}, ${message}`
}

export const calculateDefaultAvatarBackground = (name) => {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  return hash
}

export const intToRGB = (i) => {
  const c = (i & 0x00FFFFFF).toString(16).toUpperCase()
  return '00000'.substring(0, 6 - c.length) + c
}

export const numberWithCommas = (x) => {
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return new Intl.NumberFormat('en-IN').format(parseInt(x))
}