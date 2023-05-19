import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import TextEditor from '../Components/TextEditor'

const Editor = () => {
  return (
    <div className='h-full'>
        <Header/>
        <Sidebar/>
        <TextEditor/>
    </div>
  )
}

export default Editor