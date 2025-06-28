"use client";

import { createContactData } from "@/app/_action/contact";
import { useFormState } from "react-dom";
import styles from "./index.module.css";

const initialState = {
status: "",
message:"",
};

export default function ContactForm(){
const [state,formAction] =
useFormState(createContactData,initialState);
console.log(state);
if (state.status === "success"){
return(
<p className={styles.success}>
お問い合わせいただきありがとうございます。<br />
お返事まで今しばらくお待ちください。
</p>
);
}

return (
<form className={styles.form} action={formAction}>
{state.status === "error" && (
<p className={styles.error}>{state.message}</p>
)}
<div className={styles.horizontal}>
<div className={styles.item}>
<label className={styles.label} htmlFor="lastname">
姓
</label>
<input type="text" className={styles.textfield} id="lastname" name="lastname" />
</div>
<div className={styles.item}>
<label className={styles.label} htmlFor="firstname">
名
</label>
<input type="text" className={styles.textfield} id="firstname" name="firstname" />
</div>
</div>

<div className={styles.item}>
<label className={styles.label} htmlFor="company">
会社名
</label>
<input type="text" className={styles.textfield} id="company" name="company" />
</div>
<div className={styles.item}>
<label className={styles.label} htmlFor="email">
メールアドレス
</label>
<input type="text" className={styles.textfield} id="email" name="email" />
</div>

<div className={styles.item}>
<label className={styles.label} htmlFor="message">
メッセージ
</label>
<textarea className={styles.textfield} id="message" name="message">
</textarea>
</div>
<div className={styles.actions}>
<input type="submit" value="送信する" className={styles.button} />
</div>
</form>

);
}