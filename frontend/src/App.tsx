import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import Input from "./Components/Input";
function App() {
  return (
    <>
      <div className="centerdiv">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="main-container">
            <h1>Link shortener</h1>
            <Input placeholder="mycustomlink" prefix="rizzair.ltd/"></Input>
            <button className="custom-button">Create</button>
          </div>
        </motion.div>
      </div>

      <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="dark" />
    </>
  );
}

export default App;
