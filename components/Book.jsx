import Image from "next/image"
import DatePicker from "./DatePicker"
import Select from "./Select"

const contents = {
  accomodation: [
    {
      id: 1,
      content: '6730 Luna Land North Rhiannonmouth',
    },
    {
      id: 2,
      content: '4515 Lorem, ipsum dolor',
    },
    {
      id: 3,
      content: '1813 Sit amet consectetur',
    },
    {
      id: 4,
      content: '4812 Iure dolore recusandae iste',
    },
  ],
  guests: [
    {
      id: 1,
      content: '1 adult',
    },
    {
      id: 2,
      content: '2 adults',
    },
    {
      id: 3,
      content: '3 adults',
    },
    {
      id: 4,
      content: '4 adults',
    },
  ]
}

const Book = () => {
  return (
    <div className="container">
      <div className="book">
        <div className="book__title">
          Book your vacation
        </div>
        <div className="book__form">
          <div className="book__form__inputs">
            <div className="input__wrapper" style={{maxWidth:'462px'}}>
              <Select
                title="Accomodation"
                content={contents.accomodation}
                icon="/img/icon/home-icon.svg"
              />
            </div>
            <div className="input__wrapper" style={{width:'192px', position:'relative'}}>
              <div className="input__icon__wrapper" >
                <Image className="input__icon" src="/img/icon/calendar-icon.svg" fill="#E7E7F2" alt="Calendar" width={28} height={28} />
              </div>
              <div style={{marginLeft: '40px'}}>
                <DatePicker
                  title="Check-in"
                  date="2019-06-19"
                />
              </div>
            </div>
            <div className="input__wrapper" style={{width:'152px'}}>
              <DatePicker
                title="Check-out"
                date="2019-06-19"
              />
            </div>
            <div className="input__wrapper" style={{width:'266px'}}>
              <Select
                title="Guests"
                content={contents.guests}
                icon="/img/icon/human-icon.svg"
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