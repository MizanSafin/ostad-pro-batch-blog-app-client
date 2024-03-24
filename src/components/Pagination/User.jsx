const User = ({ user }) => {
  return (
    <article className="bg-slate-200 w-[340px] rounded-md py-3 shadow-md hover:shadow-sm">
      <img
        className="mx-auto rounded-full"
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
      />
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <p>Email: {user.email}</p> <p>User ID: {user.id}</p>
    </article>
  );
};

export default User;
