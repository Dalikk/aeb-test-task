import Image from 'next/image'
import { useState } from 'react'

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '38px 12px 12px 20px',
    letterSpacing: '0.027rem',
    background: 'none', 
    border: 'none', 
    fontFamily: 'SFPro',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '20px', 
    color:'#fff',
    outline: 'none'
  },
  option: {
    backgroundColor: '#4e5455',
    color: 'rgb(231, 231, 242, 0.6)',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '0.027rem',
  },
  title: {
    position: 'absolute',
    left: '20px',
    top: '14px',
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgb(231, 231, 242, 0.6)',
    marginBottom: '6px',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '15px',
    transform: 'translate(0, -45%)'
  },
}

const DatePicker = ({ title, icon, date }) => {
  const [dateVal, setDateVal] = useState(date)

  return (
    <div style={styles.wrapper}>
      {
        icon && 
          <div style={styles.icon}>
            <Image src={icon} fill="#E7E7F2" alt={title} width={28} height={28} />
          </div>
      }
      <div style={styles.title}>{title}</div>
      <input type="date" value={dateVal} onChange={(e) => setDateVal(e.target.value)} style={styles.input} />
    </div>
  )
}

export default DatePicker