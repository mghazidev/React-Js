import React from 'react';

export default function Card(props) {
  return (<>
    <div className=''>
      <div className='max-w-[1240px] mx-auto'>
        <div className=''>
          <form>
            <div className="py-10 flex">
                <div className=''>  
                    <label for="exampleFormControlInput1" className=''>{props.label}</label>
                    <input type={props.type} class="form-control" id="exampleFormControlInput1" placeholder={props.placeholder} required/>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}
