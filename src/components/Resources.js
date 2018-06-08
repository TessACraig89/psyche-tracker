import React, {Component} from 'react';
import '../App.css';

class Resources extends Component{
  render(){
    return (
      <div class="resources">
        <h1 class="resourcesTitle">Resources</h1>
        <ul class="resourcesList">
          <li class="listItem"><a class="listItem" href="https://suicidepreventionlifeline.org/">National Suicide Prevention Lifeline</a><br></br><a href="tel:1-800-273-8255" class="liItem#">1-800-273-8255</a></li>
          <li class="listItem"><a class="listItem" href="http://www.thehotline.org/">National Domestic Violence Hotline</a><br></br><a href="tel:1-800-799-7233" class="listItem#">1-800-799-7233</a></li>
          <li class="listItem"><a class="listItem" href="https://www.thehopeline.com/">The Hope Line</a><br></br><a href="tel:1-800-273-8255" class="listItem#">1-800-273-8255</a></li>
          <li class="listItem"><a class="listItem" href="https://www.translifeline.org/">Trans Lifeline</a><br></br><a href="tel:1-877-565-8860" class="listItem#">1-877-565-8860</a></li>
          <li class="listItem"><a class="listItem" href="http://www.thebody.com/index/hotlines/national.html">National AIDS Hotline</a><br></br><a href="tel:1-800-232-4636 "class="listItem#">1-800-232-4636</a></li>
          <li class="listItem"><a class="listItem" href="http://addictionblog.org/support/alcohol-hotline/">Alcohol Hotline</a><br></br><a href="tel:1-888-497-6879" class="listItem#">1-888-497-6879</a></li>
          <li class="listItem"><a class="listItem" href="http://www.ashasexualhealth.org/stdsstis/">Sexually Transmitted Disease Hotline</a><br></br><a href="tel:1-800-227-8922" class="listItem#">1-800-227-8922</a></li>
        </ul>
      </div>
    )
  }
}

export default Resources
