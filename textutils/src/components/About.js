import React ,{useState} from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({ 
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'

    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({ 
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    let myStyle={
      color: props.mode=='dark'?'white':'#042743',
      backgroundColor: props.mode=='dark'?'rgb(36 74 104)':'white',
      // border: '2px solid' ,
      // borderColor:props.mode=='dark'?'white': '#042743'
    }

  return (
        <div className="container" >
            <h1 className="my-3" style={{color: props.mode=='dark'?'white':'#042743'}}>About Us</h1>
            <div class="accordion" id="accordionExample">
    <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <strong>Analyze text</strong> 
        </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body" style={myStyle}>
            <strong>TextUtils gives you a way to analyze your text quickly and efficiently.</strong> It can count words,characters,clears text,converts into uppercase and lowercase.
        </div>
        </div>
    </div>
    <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <strong> Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            TextUtils is a free character count tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit. 
        </div>
        </div>
    </div>
    <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            This word counter software works in any web browsers such as Chrome,firefox,Internet explorer,Safari,Opera. It suits to count characters in facebook,blog,books,excel document,pdf document,essays etc.
        </div>
    </div>
  </div>
</div>

    </div>
  )
  }