import { NOT_FOUND } from 'redux-first-router'

// try dispatching these from the redux devTools

export const goToPage = (type, category) => ({
  type,
  payload: category && { category }
})

export const goHome = () => ({
  type: 'HOME'
})

export const goEntry = () => ({
  type: 'ENTRY'
})

export const goDetailPage = () => ({
  type: 'DETAILPAGE'
})

export const goFeed = () => ({
  type: 'FEED'
})

export const notFound = () => ({
  type: NOT_FOUND
})
