import Image from 'next/image'

const Main = () => {
  return (
      
    <main>
      <div className="main__wrapper">
        <div className="container">
          <div className="main__text">
            <div className="main__title">
              <h1>Beautiful Places of England</h1>
            </div>
            <div className="main__desc">
              <p>Plan your vacation on the most beatiful<br/> places of England</p>
            </div>
          </div>
          <div className="main__next">
            <div className="main__next__wrapper">
              <div className="main__next__title">
                Up next
              </div>
              <div className="main__next__text">
                Aerial View of Rock Cliffs
              </div>
              <div className="main__arrow">
                <Image src="/img/arrow.svg" alt="next" width={43} height={14} />
              </div>
            </div>
            <Image src="/img/mountains.png" alt="mountains" width={300} height={400} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main