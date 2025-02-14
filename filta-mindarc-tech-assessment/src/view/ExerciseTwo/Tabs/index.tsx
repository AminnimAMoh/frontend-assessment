import React, { ReactElement, useState } from "react";

//Type initialization for arguments deconstruction.
interface Data {
  title: string;
  content: string;
}

// Type initialization for arguments.
interface Props {
  data: Data[];
}

function Tabs({ data }: Props): ReactElement {
    const [visibleContent, setVisibleContent]=useState<string>(data[0].content)
    const [activeIndex, setActiveIndex]=useState<number>(0)

    const handleTabClick=(content: string, index: number)=>{
      setVisibleContent(content); 
      setActiveIndex(index)  
    } 
  return (
    <div className="container h-100 d-sm-none d-md-block">
      <ul className="nav nav-pills nav-fill">
        {data.map(({ content, title }, index) => {
          return (
            <li className="nav-item">
              <a className={`nav-link ${index===activeIndex ? 'active' : ''}`} onClick={e=>handleTabClick(content, index)}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="container d-flex align-items-center justify-content-center just h-100 w-50">
            <div dangerouslySetInnerHTML={{ __html: visibleContent }}/>
      </div>
    </div>
  );
}

export default Tabs;
