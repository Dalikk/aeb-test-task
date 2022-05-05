import Image from "next/image"
import Input from "./Input"

const Book = () => {
  return (
    <div className="container">
      <div className="book">
        <div className="book__title">
          Book your vacation
        </div>
        <div className="book__form">
          <div className="book__form__inputs">
            <div className="input__wrapper" style={{width:'464px'}}>
              <Input 
                title="Accomodation"
                content="6730 Luna Land North Rhiannonmouth"
                icon="/img/icon/home-icon.svg"
                arrow
              />
            </div>
            <div className="input__wrapper" style={{width:'192px'}}>
              <Input 
                title="Check-in"
                content="19.06.2019"
                icon="/img/icon/calendar-icon.svg"
              />
            </div>
            <div className="input__wrapper" style={{width:'152px'}}>
              <Input 
                title="Check-out"
                content="19.06.2019"
              />
            </div>
            <div className="input__wrapper" style={{width:'266px'}}>
              <Input 
                title="Guests"
                content="4 adults"
                icon="/img/icon/human-icon.svg"
                arrow
              />
            </div>
          </div>
          <div className="book__btn">
            Search
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book