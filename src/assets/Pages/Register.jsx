import InputForm from "../Molecules/InputForm";
import SubmitForm from "../Molecules/SubmitForm";
import Logo from "../Molecules/Logo";
import BG from "../Images/registerCinema.jpg"
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("")
  const [repassword, setRepassword] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-center bg-cover"
    style={{ backgroundImage: `url(${BG})` }}>
      <div className=" p-[24px] lg:p-[40px] flex flex-col justify-center bg-[#181A1CD6]/84 min-w-[306px] min-h-[384px] lg:h-[778px] lg:w-[529px] max-w-[529px] max-h-[778px] rounded-[8px] lg:rounded-[16px] gap-[20px] lg:gap-[37px]">
        <Logo pages="register"/>
        <InputForm pages="register" username={username} setUsername={setUsername} password={password} setPassword={setPassword} repassword={repassword} setRepassword={setRepassword}/>
        <SubmitForm pages="register" username={username} setUsername={setUsername} password={password} setPassword={setPassword} repassword={repassword} setRepassword={setRepassword}/>
      </div>
    </div>
  )
}

export default Register