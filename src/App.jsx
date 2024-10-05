import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "framer-motion"

function App() {
  const[design,setDesignImage]=useState();
  function setDesign(e){
console.log(e.target.value,e.target.files[0])
setDesignImage(URL.createObjectURL(e.target.files[0]));


  }
  const[currentIndex,setIndex]=useState(0);
  const  tshirtColors=[
    {color:'black',
      url:'https://xclusiv.in/wp-content/uploads/2024/04/solid-unisex-tshirt-black.webp'
    
    },
    {color:'red',
      url:'https://i.etsystatic.com/36788227/r/il/7946ad/4164851707/il_fullxfull.4164851707_ar99.jpg'
    
    },
    {color:'green',
      url:'https://tiimg.tistatic.com/fp/1/007/746/green-plain-casual-wear-breathable-half-sleeve-round-neck-cotton-t-shirts-for-men-484.jpg'
    
    },
    {color:'maroon',
      url:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30154454/2024/7/9/90941655-94af-45a5-90c8-998546fe26bd1720490110956HMWomenFittedTshirts1.jpg'
    
    },
    
    
      ];
  const [tshirts, setTshirts] = useState(tshirtColors)


  return (
<div className='h-[100vh] w-[100vw] bg-white'>
<div className='h-full w-full bg-red-300 flex flex-col justify-evenly items-center '>
<div  className='w-[40%] h-[80%] bg-slate-300  relative'> 
  <img src={tshirts[currentIndex].url} className='h-[100%] w-full object-contain'   alt="" />

<motion.div


// src={design}  

initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }} key={currentIndex} className='h-[50%] w-[50%] bg-red-300  object-contain absolute top-[50%] left-[50%] 	-translate-x-1/2 -translate-y-1/2' alt="" >


<img src={design} className='h-full w-full object-contain' alt="" />



    </motion.div>





{/*  */}


</div>
<div className='w-[70%] h-[10%] bg-slate-300 flex items-center justify-start gap-2'> 
{tshirts.map(((item,index)=><img className='h-[95%] object-contain ' key={item.color} src={item.url} onClick={()=>setIndex(index)}/>))}
<input type='file' onChange={setDesign} />

</div>

</div>



</div>
  )
}

export default App
