import React from 'react';
import "../css/profile.scss";
import Card from './Card'

const Profile = () => {
  return (
    <React.Fragment>
      <div className="profile">
      <div className="background" style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1661287976410-a9b4a4b65716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")`,
        backgroundRepeat: "no-repeat",
      }}>
        <div className="profile-logo">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>
      </div>
        <div className="grid">
          <div className="first-column">
            <p className="name"> <b>Ankit Kumar</b> </p>
            <p className="about">
              <b>Software Engineer at IBM (ISDL)</b>
            </p>
            <p className="talks">
              Talks about #webdevelopment #css #learning
            </p>
          </div>
          <div className="second-column">
            <p className="company">
              <b>IBM</b>
            </p>
            <p className="college">
              <b>Maulana Abul Kalam Azad University of Technology, West Bengal</b>
            </p>
          </div>
        </div>
    </div>
    {/* <div className="profile posted-blog">
      <Card />
      <hr />
      <Card />
      <hr />
      <Card />
    </div> */}
    </React.Fragment>
  )
}

export default Profile