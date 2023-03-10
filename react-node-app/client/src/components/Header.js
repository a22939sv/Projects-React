import React from "react";
import LogoBox from "./LogoBox";
import SearchBox from "./SearchBox";
import StartBox from "./StartBox";

const Header = (props) => {
    return (
        <>
            <LogoBox />
            <SearchBox searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
            <StartBox />
        </>
    )
}

export default Header;
