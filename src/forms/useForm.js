import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  //set it false because it submitted yet
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //display error passing from valiate info
    setErrors(validate(values));

    //we put it here because this is sumbit section as it name
    //we still cant sumbit anything, so we have to create useState in Form.js
    //we  have to create state isSubmitted and setIsSubmitted there
    setIsSubmitting(true);
  };

  //we need useEffect jadi kalau gapake useEffect kita masih bisa
  //mencet signup dan pindah halaman, maka kita harus uat fungsi menggunakan ini
  //agar user hanya dapat signup ketika sudah mmengisi form dgn sesuai
  useEffect(() => {
    //jika panjang error ketika submit = 0 atau tidak ada pesan eror sama sekali
    //baru jalankan fungsi callback
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]); //tanpa dependency array eror, maka fungsi error tidak akan muncul
  // hanya saja tidak dapat sign up (erornya ada tapi tidak terlihat)

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
