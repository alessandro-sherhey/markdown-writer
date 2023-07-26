import { Typography } from "antd";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector } from "react-redux";

const MDResult = () => {
    const text = useSelector(state => state.md)
    return (
        <div className="mdresult" style={{height: 'calc(100vh - 190px)', border: '1px solid rgb(215, 215, 215)', borderRadius: 7, padding: '0px 13px'}}>
            <ReactMarkdown
                // components={{
                //     h1: <Typography.Title level={1}></Typography.Title>,
                //     h2: <Typography.Title level={2}></Typography.Title>,
                //     h3: <Typography.Title level={3}></Typography.Title>
                // }}
            >
                {text}
            </ReactMarkdown>
        </div>
    )
}

export default MDResult;