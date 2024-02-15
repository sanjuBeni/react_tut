import React, {forwardRef} from 'react'

function ForwordRefCom(props, ref) {

  return (

    <div>
        <input type='text'  ref={ref}/>
    </div>
  )
}

export default forwardRef(ForwordRefCom);