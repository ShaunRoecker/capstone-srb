import "./categories.styles.scss"
import Directory from "../components/directory/directory.component";
import Categories from "./categories";
import "tachyons";
const App = () => {
  
  return (
      <div>
        <Directory 
          categories={Categories}/>

      </div>  
  )
};
export default App;