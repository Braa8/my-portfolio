import Image from "next/image";

export default function Mood (){

    function toggleDarkMode() {
        const html = document.documentElement;
        const isDark = html.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
    
      // ضبط الوضع عند التحميل بناءً على localStorage
        let theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark')
        }  else {
            document.documentElement.classList.remove('dark');
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