// pages/myWork.js
import dynamic from 'next/dynamic';

const Work = dynamic(() => import('../components/MyWorkPage'), {
  ssr: false
});

export default Work;
