import React from 'react'
import { useParams } from 'react-router-dom'

const ShowDetail = () => {
    const {id} = useParams()
  return (
    <div>
      Show Movie Detail Yourself {id}
    </div>
  )
}

export default ShowDetail
