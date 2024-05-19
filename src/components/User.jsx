function User({ avatar, email, first_name, last_name }) {
  return (
    <div id="user-box">
      <img src={avatar} alt={first_name} />
      <div>
        Name : {first_name} {last_name}
      </div>
      <div>Email : {email}</div>
    </div>
  );
}

export default User;
