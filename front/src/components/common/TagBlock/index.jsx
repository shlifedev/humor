
import { useCallback } from 'react';
export const TagBlock = ({text, option}) =>{ 
  const styles = {
    padding : '0.5rem 1.0rem',
    fontSize : '0.8rem' ,
    borderRadius : '8px',
    backgroundColor : 'red',
    border : '1px solid black'
  }
 

  return <div style={styles}>
    {text}
  </div>
}