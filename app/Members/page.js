import Image from 'next/legacy/image';
import style from './style.module.css';


export default function page() {
  return (
    <div className={style.Member}>
      <h1>Members List</h1>

<div className={style.memberCards}>
{/* member 1 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img1.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3></h3>
<h2>KULJEET SINGH GILL <p> (Founder) </p> </h2>
</div>

{/* member 2 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img11.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3></h3>
<h2>RIMMI GILL</h2>
</div>
{/* member 3 */}



{/* member 4 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/mankirat.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3></h3>
<h2>MANKIRAT SINGH</h2>
</div>

{/* <div className={style.card}>
<div className={style.image}>
<Image src="/ammy.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3></h3>
<h2>AMANDEEP SINGH</h2>
</div> */}



<div className={style.card}>
{/* <div className={style.image}>
<Image src="/member/img13.jpg" alt="member 1" layout="fill" priority/>
</div> */}

<h3>Others</h3>
<h2>Jarnail Singh</h2>
<h2>Jassi Ghuman</h2> 
<h2>Mandeep Singh</h2>
<h2>Amarjit Singh</h2>
<h2>Kuldeep Singh</h2>
<h2>Sukhdev Singh</h2>
<h2>Jagdeep Singh</h2>
<h2>Suresh Kumar</h2>
<h2>Shashi</h2>
</div>
{/* 
<div className={style.card}>
<div className={style.image}>
<Image src="/member/mankirat.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3></h3>
<h2>Amandeep Singh</h2>
</div> */}


</div>
    </div>
  )
}
