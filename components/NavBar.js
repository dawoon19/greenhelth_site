import '../styles/index.css';
import router, { useRouter } from 'next/router';

export default function NavBar(props) {
    return (
        <div>
            <div onClick={()=>router.push('')}>Home</div>
            <div onClick={()=>router.push('')}>About</div>
        </div>
    );
}
