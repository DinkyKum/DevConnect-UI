import React from 'react'


const UserCard = ({user}) => {
  return (
    <div className="card bg-base-300 w-96 h-[500px] shadow-xl mt- 20">
  <figure className="m-4">
    <img
      src={user.photoUrl}
      alt="UserImage" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">{user.firstName+ " " + user.lastName}</h2>
    <p className="justify-center flex">{user.about}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-secondary">Interested</button>
      <button className="btn btn-primary">Ignore</button>
    </div>
  </div>
</div>
  )
}

export default UserCard