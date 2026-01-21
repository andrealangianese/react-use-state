function Button(props) {

    // destrutturo le props
    const title = props.title;
    const onClick = props.onClick

  return (
    // al click parte la funzione e esegue title
    <button onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
