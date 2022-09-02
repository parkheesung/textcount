function Tab(props:any) {
    return (
    <ul className="nav nav-tabs" id={props.id}>
    {(props.data !== null && props.data !== undefined && props.data.length > 0) ? props.data.map((item:any) => (
        <li className="nav-item" key={item.key}>
        <a className="nav-link" href="#" onClick={props.onClick} data-value={item.value}>{item.key}</a>
        </li>
    )) : props.children }
    </ul>);
};

export default Tab;