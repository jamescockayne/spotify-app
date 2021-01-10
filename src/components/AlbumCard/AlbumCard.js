import React from 'react';

const AlbumCard = (props) => {

const { name, image, popularity } = props

  return(
    <div className="br2 ba dark-gray b--black-10 mv2 mv4-ns w-50 ma3-ns w-20-ns center">
      <img  src={image} className="db w-100 br2 br--top" alt="Album art"/>
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">{name}</h1>
          </div>
          <div className="dtc tr">
            <h2 className="f5 mv0">{popularity}</h2>
          </div>
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">
          This is an album
        </p>
      </div>
    </div>
  )
}

export default AlbumCard
