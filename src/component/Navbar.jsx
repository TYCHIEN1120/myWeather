import { Link } from "react-router-dom";

export default function App(){
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>首頁</Link>
                </li>
                <li>
                    <Link to='/about'>關於我</Link>
                </li>
                <li>
                    <Link to='/news'>最新消息</Link>
                </li>
            </ul>
        </div>
    )
}