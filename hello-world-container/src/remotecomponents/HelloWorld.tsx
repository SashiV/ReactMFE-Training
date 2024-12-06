import { useEffect, useRef } from 'react'
import {mount} from 'helloworld/HelloWorld'
const HelloWorld = (): JSX.Element =>{
    
const helloWorldDiv = useRef<HTMLDivElement>(null)

  useEffect( () => {
    mount(helloWorldDiv.current)
  }, [])

 return   <div ref={helloWorldDiv}></div>}

export default HelloWorld

