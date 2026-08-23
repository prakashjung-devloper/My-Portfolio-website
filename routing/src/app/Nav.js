import Link from "next/link";

export default function Nav() {

  return (

<ul style={{
fontSize:"18px",
lineHeight: "1.8",
display:"flex",
marginLeft:"100px",
listStyle:"none",
marginTop:"200px"


}}>

<li>
    <Link href="/">Home</Link>
</li>

<li>
    <Link href="/about">About</Link>
</li>


<li>
    <Link href="/contact">Contact</Link>
</li>

</ul>

  );
}