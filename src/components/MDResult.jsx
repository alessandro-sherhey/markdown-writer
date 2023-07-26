import { Typography } from "antd";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector } from "react-redux";

const MDResult = () => {
    const text = useSelector(state => state.md)
    return (
        <div className="mdresult" style={{height: 'calc(100vh - 190px)', border: '1px solid rgb(215, 215, 215)', borderRadius: 7, padding: '0px 13px', overflowY: 'auto'}}>
            <ReactMarkdown>
                {text}
            </ReactMarkdown>
        </div>
    )
}

export default MDResult;