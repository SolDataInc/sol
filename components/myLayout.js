import Header from './header';
import LoginControl from './LoginControl';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
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
    </div>
);

export default Layout;