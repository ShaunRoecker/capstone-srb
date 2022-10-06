import "../../containers/categories.styles.scss"
import Directory from "../../components/directory/directory.component";
import Categories from "../../containers/AppDirectorySettings";
//import App from "../../containers/App";


const Home = () => {
  
  return (
      <div> 
        <Directory 
          categories={Categories}/>

      </div>  
  )
};
export default Home;