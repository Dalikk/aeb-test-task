import Image from "next/image"

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 16px',
  },
  icon: {
    marginRight: '16px'
  },
  title: {
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgb(231, 231, 242, 0.6)',
    marginBottom: '6px',
    letterSpacing: '0.065rem'
  },
  content: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '20px',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
  },
  arrow: {
    cursor: 'pointer'
  }
}

const Input = ({ title, content, icon, arrow }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.main}>
        {icon && 
          <div style={styles.icon}  >
            <Image src={icon} fill="#E7E7F2" alt={title} width={28} height={28} />
          </div>
        }
        <div>
          <div style={styles.title}>{title}</div>
          <div style={styles.content}>{content}</div>
        </div>
      </div>
      <div style={styles.arrow}>
        {arrow && <Image src="/img/form-arrow.svg" alt="arrow" width={28} height={28} />}  
      </div>
    </div>
  )
}

export default Input