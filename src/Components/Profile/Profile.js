import React from 'react'

function Profile(prop) {
  return (
    <div>
        <p>{prop.text} {prop.data.name}, This is passing of props.</p>

    </div>
  )
}

export default Profile;