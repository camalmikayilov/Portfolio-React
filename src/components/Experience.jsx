import React from 'react'
/** 
googleda axtarirsan neyi:
fetch
****how to fetch local jsondata in js
async await in js (asynchrooms function) 
**/
const experience = () => {
    return (
        <div className='experience'>
          <div className='d-flex justify-content-center my-5'>
            <h1>Experience</h1>
            </div>
        
        
            <div className='container experience-wrapper'>



          

       {/*experience -1*/}
       <div className='timeline-block timeline-block-rigt'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2009-2020</h3>
                    <p>Məhəmmədi Kənd Tam Orta Məktəb</p>
                </div>
            </div>



            {/** experience-2 **/}

            <div className='timeline-block timeline-block-left'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2016-2017</h3>
                    <p>Kimya Biologiya Təmayüllü Respublika Litseyi</p>
                </div>
            </div>

              {/*experience -1*/}
       <div className='timeline-block timeline-block-rigt'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2020-2021</h3>
                    <p>TexnoEra Academy</p>
                </div>
            </div>



            {/** experience-2 **/}

            <div className='timeline-block timeline-block-left'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2020-2024</h3>
                    <p>Azərbaycan Dövlət Neft və Sənaye Universiteti</p>
                </div>
            </div>

          </div>
        </div>

    )
}

export default experience
