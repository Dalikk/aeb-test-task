import Image from 'next/image'

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
  },
  select: {
    width: '100%',
    padding: '38px 91px 12px 60px',
    letterSpacing: '0.027rem',
    background: 'none', 
    border: 'none', 
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '20px', 
    color:'#fff',
    appearance: 'none',
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
    left: '59px',
    top: '14px',
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgb(231, 231, 242, 0.6)',
    marginBottom: '6px',
    letterSpacing: '0.075rem'
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '13px',
    transform: 'translate(0, -45%)'
  },
  arrow: {
    position: 'absolute',
    pointerEvents: 'none',
    right: '15px',
    top: '50%',
    transform: 'translate(0, -45%)'
  }
}

const Select = ({icon, title, content, pr}) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.icon}  >
        <Image src={icon} fill="#E7E7F2" alt={title} width={28} height={28} />
      </div>
      <div style={styles.title}>{title}</div>
      <select style={styles.select} >
        {content.map(({id, content}) => (
          <option style={styles.option} key={id} value={id}>{content}</option>  
        ))}
      </select>
      <div style={styles.arrow}>
        <Image src="/img/form-arrow.svg" alt="arrow" width={28} height={28} />
      </div>
    </div>
  )
}

export default Select