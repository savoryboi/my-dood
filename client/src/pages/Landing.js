function Landing(props) {
  console.log(props);
  return (
    <div>
      <h1>
        Welcome {props.user ? props.user._id : "Guest"}!
      </h1>
    </div>
  );
}

export default Landing;
