function MyButton(props) {

  let { message, color, size } = props;

  function handleClick (evt) {
    alert("Turn around, slowly");
  }

    return (
      <button onClick={handleClick}>{ props.message }</button>
    );
  }

  export default MyButton;
  