import React, {Component} from 'react';

class Resources extends Component{
  render(){
    return (
      <div>
        <h1 class="resourcesTitle">Resources</h1>
        <ul>
          <li class="listItem1"><a class="listItem1Link" href="https://suicidepreventionlifeline.org/">National Suicide Prevention Lifeline</a><span class="liItem1#">1-800-273-8255</span></li>
          <li class="listItem2"><a class="listItem2Link" href="http://www.thehotline.org/">National Domestic Violence Hotline</a><span class="listItem2#">1-800-799-7233</span></li>
          <li class="listItem3"><a href="https://www.thehopeline.com/">The Hope Line</a><span>1-800-273-8255</span></li>
          <li class="listItem4"><a href=""></a></li>
          <li class="listItem5"><a href=""></a></li>
          <li class="listItem6"><a href=""></a></li>
        </ul>
      </div>
    )
  }
}

export default Resources
