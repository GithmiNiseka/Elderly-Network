import React from "react"
import { awrapper } from "../../dummydata"

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex' style={{position:'relative',top:'-20px',left:'100px'}}>
                <div className='img' style={{ml:'15px',}}>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text' style={{ml:'15px',mr:'-5px'}}>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
