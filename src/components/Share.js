import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons'

const style = {
  height: 25,
  width: 25,
  margin: 5
}

const url = 
  ['https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000&quote=ChartTune',
   'https://twitter.com/intent/tweet?source=http%3A%2F%2Flocalhost%3A3000&text=ChartTune:%20http%3A%2F%2Flocalhost%3A3000',
   'http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Flocalhost%3A3000&title=ChartTune&summary=Chart%20tune%20is%20a%20web%20side%20which%20provide%20music%20charts&source=http%3A%2F%2Flocalhost%3A3000',
   'http://www.tumblr.com/share?v=3&u=http%3A%2F%2Flocalhost%3A3000&quote=ChartTune&s=']

class Share extends Component {
  render() {
    return (
      <div>
        {url.map(url => <SocialIcon url={url} style={style} /> )}
      </div>
    );
  }
}

export default Share;
