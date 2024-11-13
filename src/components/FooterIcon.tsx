type social = {
  id: number;
  name: string;
  icon: string;
  link: string;
};

function FooterIcon( {social}: { social: social }) {
    return (
      <li>
        <a href={social.link} target="_blank"><img src={social.icon}/></a>
      </li>
    )
  }
  
  export default FooterIcon