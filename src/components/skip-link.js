import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main"
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        height: 50,
        width: '200px',
        display: 'flex',
        alignItems: 'center'
      }}
      className={'visually-hidden'}
      >
      Skip to main content
    </a>
  )
}
