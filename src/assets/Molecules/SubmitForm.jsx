import { useState } from "react";
import Button from "../Atoms/Button";
import Label from "../Atoms/Label";
import Google from "../Images/logoGoogle.png";
import { Link, useNavigate } from "react-router-dom";

const tempProps =
  "py-[8.09px] lg:py-[14.5px] w-[100%] rounded-[13.86px] lg:rounded-[24px] outline-[0.58px] lg:outline-[1px] outline-solid outline-[#E7E3FC3B] font-semibold lg:text-[16px] lg:font-[600]";

const handleSubmitLogin = (username, password, navigate) => {
  const userData = {
    username: username,
    password: password,
  };

  const registeredAccount = JSON.parse(localStorage.getItem("account"));
  console.log(registeredAccount);
  if (
    (userData.username == registeredAccount.username,
    userData.password == registeredAccount.password)
  ) {
    return (navigate("/home"), alert(`Selamat datang ${userData.username}!`));
  } else {
    return alert("Username atau Password Salah!");
  }
};

const handleSubmitRegister = (username, password, repassword, navigate) => {
  const userData = {
    username: username,
    password: password,
    repassword: repassword,
  };

  if (userData.password == userData.repassword) {
    localStorage.setItem("account", JSON.stringify(userData));
    navigate("/");
    alert(`Selamat atas aktivasi akun ${userData.username}!`);
  } else {
    return alert("Password tidak sama!, Tolong diperbaiki")
  }
};

const SubmitForm = ({ pages, username, password, repassword }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-[4px] lg:gap-[8px]">
      {/* <Link to={"/home"}> */}
      <Button
        type={"submit"}
        isi={pages == "login" ? "Masuk" : "Daftar"}
        className={`${tempProps} bg-[#3D4142] cursor-pointer`}
        onClick={
          pages == "login"
            ? () => handleSubmitLogin(username, password, navigate)
            : () =>
                handleSubmitRegister(username, password, repassword, navigate)
        }
      />
      {/* </Link> */}
      <Label
        isi={"Atau"}
        className={"text-[#9D9EA1] lg:text-[14px] lg:font-[500]"}
      />
      <div
        className={`${tempProps} flex justify-center gap-[11.55px] lg:gap-[20px] items-center`}
      >
        <img src={Google} alt="Google" className="size-[10px] lg:size-[18px]" />
        <Link to={"/"}>
          <Button
            type={"submit"}
            isi={`${pages == "login" ? "Masuk" : "Daftar"} dengan Google`}
            className={"cursor-pointer"}
          />
        </Link>
      </div>
    </div>
  );
};

export default SubmitForm;
