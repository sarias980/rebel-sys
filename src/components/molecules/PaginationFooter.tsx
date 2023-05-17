import React from "react";
import './PaginationFooter.css';
import ItemButton from "../atoms/Button";

interface PaginationFooterInterface {
    page: number,
    pageSize: number,
    data:number
    setPage: (num: number) => void;
}

const PaginationFooter: React.FC<PaginationFooterInterface> = ({page,pageSize, data,setPage}) => {
    return (
        <div className={'pagination-footer'}>
            <ItemButton text={'←'} onClick={() => setPage(page-1)} size={"small"} disable={page === 1}/>
            <ItemButton text={'→'} onClick={() => setPage(page+1)} size={"small"} disable={page === Math.ceil(data / pageSize)}/>
        </div>
    )
}
export default PaginationFooter
