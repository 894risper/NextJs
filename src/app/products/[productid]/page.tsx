import React from 'react'

interface BlogPageProbs{
    params:{
        productid:string,
    }
}
const Page :React.FC<BlogPageProbs> = ({params}) => {

  return (
    <div>product number {params.productid}</div>
  )
}

export default Page