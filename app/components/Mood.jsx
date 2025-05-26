import Image from "next/image";

export default function Mood (){

    function toggleDarkMode() {
  if (typeof window !== 'undefined') {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // ضبط الوضع عند التحميل بناءً على localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}

      

    return (
         <>
      <button className="hover:cursor-grab"  onClick={toggleDarkMode} >

        <span >
        <Image 
        src='/mood.png'
        width={30}
        height={30}
        alt="mood"
        />

        </span>
       

      </button>
    </>
      
    );
}