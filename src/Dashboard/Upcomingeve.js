import React from 'react'
import './upcoming.css';
function Upcomingeve() {

const arr = [
    {
        id:1,
        image:"https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:1,
        image:"https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww&w=1000&q=80",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:1,
        image:"https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:1,
        image:"https://oui.edu.in/wp-content/uploads/2022/02/oriental-university-indore-about-us.jpg",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:1,
        image:"https://images.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
]

  return (
    <div className='upcoming_main_container'>
        <div className='upcoming_main_container_child'>
        <div className='upcoming_main_container_top'>
      <p1 className="events_text">Upcoming Events</p1>
</div>
<div className='upcoming_main_container_bottom'>
    {
        arr.map((items)=>{
            return(
<div className='info_div'>
<div className='image_container'>
<img className='images' src={items.image} />
</div>
<div className='text_container'>
<p1 className="text_containertext">{items.description}</p1>
</div>
</div>
            )
        })
    }

</div>
        </div>
             
    </div>
  )
}

export default Upcomingeve
