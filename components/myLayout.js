import Link from "next/link";
import Header from './header';
import LoginControl from './LoginControl';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const linkStyle = {
    marginRight: 15
};

const loginStyle = {
    position: "absolute",
    left: "90%",
    top: "3%"
}

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        <div style={loginStyle}>
            <LoginControl />
        </div>
        {props.children}
        <br/>
        <br/>
        <Link href="https://roubekas.com">
            <a style={linkStyle}>Portfolio</a>
        </Link>
        <Link href="https://blog.roubekas.com">
            <a style={linkStyle}>Blog</a>
        </Link>
        <Link href="https://github.com/eroub">
            <a style={linkStyle}>Github if you're into that sort of thing</a>
        </Link>
    </div>
);

export default Layout;