import { useEffect } from 'react';
import './Timeline.css';

function Timeline() {
  var all_posts = [
    {
      pic_url: 'https://visafoto.com/img/docs/zz_30x40.jpg',
      post_text: 'this is a woman'
    }, 
    {
      pic_url: 'https://visafoto.com/img/docs/vi_apec_business_travel_card.jpg', 
      post_text: 'also woman'
    },
    {
      pic_url: 'https://visafoto.com/img/3x4-cm-passport-photo-example.jpg', 
      post_text: 'also woman'
    }
  ]

    return (
      <main className='timeline'>
        {all_posts.map((post, index) => {
          return (
            <div key={index} className='post-card'>
              <h3 className='user-display'>username</h3>
              <img width='350px' height='466px' className='tl-dood' src={post.pic_url} alt={post.post_text} />
            </div>
          )
        })}
      </main>
    )


}

export default Timeline;