import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>

  )
}

/*props.alert && is used when it is null then rest of will not be excuted if it is not null then rest will be executed*/

